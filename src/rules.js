'use strict';

import { FieldValueError, OptionalRuleError } from './errors.js';

let EMAIL_REGEXP = new RegExp('^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]' +
    '{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$');
let URL_REGEXP = new RegExp('^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?' +
    '(\/|\/([\w#!:.?+=&%@!\-\/]))?');

/**
 * Constructor of the Rules class.
 */
let Rules = function(config) {
    this.rules = [];
};

/**
 * Registers a new rule.
 */
Rules.register = function(name, rule) {
    Rules.prototype[name] = function() {
        this.rules.push({
            rule: rule.apply(null, arguments),
            name: name
        });
        return this;
    };
    Rules[name] = function() {
        var rules = new Rules();
        rules[name].apply(rules, arguments);
        return rules;
    }
};

/**
 * Sets base errors messages that override the defaultMessage(s) in the rules.
 * It should be a dictionary like:
 * {
 *    ruleName: message,
 *    ruleName: {
 *        errorCode: message
 *    }
 * }
 */
Rules.setMessages = function(messages) {
    Rules.baseMessages = messages;
};

/**
 * Gets the error message for a given rule and its result.
 */
Rules.getErrorMessage = function(rule, result, name) {
    var base = Rules.baseMessages || {};
    if (result === false) {
        return rule.message || base[name] || rule.defaultMessage;
    } else {
        return rule.messages[result] ||
            (base[name] ? base[name][result] : null) ||
            rule.defaultMessages[result];
    }
};

/**
 * Validates that the rules are all valid
 */
Rules.prototype.validate = function(value, context) {
    try {
        for (var i=0; i<this.rules.length; i++) {
            var rule = this.rules[i].rule,
                valid = rule.check(value, context);

            // validate returned Rules objects
            if (valid instanceof Rules) {
                return valid.validate(value, context);
            }

            // not valid?
            if (valid !== true) {
                return {
                    error: valid,
                    message: Rules.getErrorMessage(rule, valid, this.rules[i].name)
                }
            }
        }
    } catch(e) {
        // if OptionalRuleError is thrown then the rule is valid. Rule validations stops.
        if (!(e instanceof OptionalRuleError)) {
            throw e;
        }
    }
    return true;
};

/**
 * Registers a rule that
 */
Rules.register('onlyIf', function(fn) {
    return {
        check: function(value, context) {
            var res = fn(value, context);
            if (!res) {
                throw new OptionalRuleError();
            }
            return true;
        }
    };
});

/**
 * Registers a rule for optional values.
 */
Rules.register('optional', function() {
    return {
        check: function(value) {
            if (value === undefined || value === '') {
                throw new OptionalRuleError();
            }
            return true;
        }
    };
});

/**
 * Registers a rule for optional values.
 */
Rules.register('custom', function(fn, message) {
    return {
        check: function(value, context) {
            return fn(value, context) || true;
        },
        defaultMessage: 'This field is invalid.',
        message: message
    };
});

/**
 * Registers a rule that checks if something is not empty.
 */
Rules.register('required', function(message) {
    return {
        check: function(value) {
            if (Array.isArray(value)) {
                // check array not empty
                return value.length > 0;

            } else if (typeof value === 'string' || value instanceof String) {
                // check string not empty
                return value.length > 0;

            } else if (value !== undefined && value !== null) {
                // value is defined
                return true;

            } else {
                return false;
            }
        },
        defaultMessage: 'This field is required.',
        message: message
    };
});

/**
 * Registers a rule for validating an email.
 */
Rules.register('email', function(message) {
    return {
        check: function(value) {
            return EMAIL_REGEXP.test(value);
        },
        defaultMessage: 'This is not a valid email address.',
        message: message
    };
});

/**
 * Registers a rule for validating an email.
 */
Rules.register('url', function(message) {
    return {
        check: function(value) {
            return URL_REGEXP.test(value);
        },
        defaultMessage: 'This is not a valid url.',
        message: message
    };
});

/**
 * Registers a rule for validating an integer.
 */
Rules.register('integer', function(message) {
    return {
        check: function(value) {
            return /^[0-9]+$/.test(value);
        },
        defaultMessage: 'This is not a valid integer.',
        message: message
    };
});

/**
 * Registers a rule for checking the length of a value.
 */
Rules.register('minLength', function(minLength, message) {
    return {
        check: function(value) {
            return value.length >= minLength;
        },
        defaultMessage: 'Minimum length of ' + minLength + ' is required.',
        message: message
    };
});

/**
 * Registers a rule for validating using regexes.
 */
Rules.register('regex', function(regex, message) {
    return {
        check: function(value) {
            return regex.test(value);
        },
        defaultMessage: 'This field does not match ' + regex + '.',
        message: message
    };
});

/**
 * Registers a rule for checking that something equals something else.
 */
Rules.register('equals', function(otherFieldName, message) {
    return {
        check: function(value, context) {
            return context.getFieldValue(otherFieldName) === value;
        },
        defaultMessage: 'This field does not match ' + otherFieldName + '.',
        message: message
    };
});

/**
 * Registers a rule for validating password.
 */
Rules.register('password', function(messages) {
    messages = messages || {};
    return {
        check: function(value) {
            if (!value || value.length < 8) {
                return 'length';
            }
            if (!/[A-Z]+/.test(value)) {
                return 'upper';
            }
            if (!/[a-z]+/.test(value)) {
                return 'lower';
            }
            if (!/[0-9]+/.test(value)) {
                return 'num';
            }
            return true;
        },
        defaultMessages: {
            length: 'Password should be at least 8 characters.',
            upper: 'Password should contain at least one uppercase letter.',
            lower: 'Password should contain at least one lowercase letter.',
            num: 'Password should contain at least one number.'
        },
        messages: messages
    };
});

/**
 * Registers a rule for validating minimum age.
 */
Rules.register('minAge', function(minAge, message) {
    return {
        check: function(value) {
            var diff = new Date(Date.now() - value.getTime()),
                age = Math.abs(diff.getUTCFullYear() - 1970);
            return age >= minAge;
        },
        defaultMessage: 'You must be at least ' + minAge + ' years old.',
        message: message
    };
});

/**
 * Registers a rule that checks that there no FieldValueError was thrown while getting the field
 * value.
 */
Rules.register('noError', function(message) {
    return {
        check: function(value) {
            return !(value instanceof FieldValueError);
        },
        defaultMessage: 'This field is invalid.',
        message: message,
    };
});

export { Rules };
