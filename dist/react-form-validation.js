!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self),o.FormValidation=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null),
    ListenerMixin = _dereq_('./listener-mixin.js');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Error',

    /**
     * Mixins
     */
    mixins: [ListenerMixin],

    /**
     * Properties type.
     */
    propTypes: {
        form: React.PropTypes.any.isRequired,
        forName: React.PropTypes.string.isRequired
    },

    /**
     * Returns the initial state of the component.
     */
    getInitialState: function getInitialState() {
        return this.getFieldState();
    },

    /**
     * Called by the listener mixin when the form is validated.
     */
    formDidValidate: function formDidValidate(result) {
        this.setState(this.getFieldState());
    },

    getFieldState: function getFieldState() {
        var fieldState = this.props.form.getFieldStateByName(this.props.forName);
        return {
            error: fieldState ? fieldState.error : undefined,
            valid: fieldState ? fieldState.valid : undefined
        };
    },

    /**
     * Renders the input.
     */
    render: function render() {
        if (this.state.valid === false) {
            return React.createElement(
                'label',
                _extends({ className: 'error' }, this.props, { form: null }),
                this.state.error
            );
        } else {
            return null;
        }
    }

});

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./listener-mixin.js":9}],2:[function(_dereq_,module,exports){
'use strict';

module.exports.Error = _dereq_('./error.js');
module.exports.FieldMixin = _dereq_('./field-mixin.js');
module.exports.Field = _dereq_('./field.js');
module.exports.Form = _dereq_('./form.js');
module.exports.Hint = _dereq_('./hint.js');
module.exports.Input = _dereq_('./input.js');
module.exports.Instance = _dereq_('./instance.js');
module.exports.ListenerMixin = _dereq_('./listener-mixin.js');
module.exports.Rules = _dereq_('./rules.js');
module.exports.Select = _dereq_('./select.js');

},{"./error.js":1,"./field-mixin.js":3,"./field.js":4,"./form.js":5,"./hint.js":6,"./input.js":7,"./instance.js":8,"./listener-mixin.js":9,"./rules.js":10,"./select.js":11}],3:[function(_dereq_,module,exports){
'use strict';

/**
 * This mixin registers the component as a field in the parent form.
 *
 * Required props:
 *   - form, the form owning the component
 *   - name, the name of this component in the form.
 *
 * Optional props:
 *   - rules, rules to apply for the component. will override the rules given to the form.
 *
 * Required methods:
 *   - getValue(), should return the value of the current component.
 */
module.exports = {
    /**
     * When the component will mount register it in the form.
     */
    componentWillMount: function componentWillMount() {
        if (this.props.form) {
            this.props.form.register(this);
        }
    },

    /**
     * When the component is removed, unregister it from the form.
     */
    componentWillUnmount: function componentWillUnmount() {
        if (this.props.form) {
            this.props.form.unregister(this);
        }
    },

    /**
     * Can be called to tell the form that the component's value has changed.
     */
    validateField: function validateField(force) {
        if (this.props.form) {
            this.props.form.validate(this, force);
        }
    }
};

},{}],4:[function(_dereq_,module,exports){
'use strict';

/**
 * Field class.
 * Represents a field stored in the form instance.
 */
var Field = function Field(component, part, state) {
    this.component = component;
    this.part = part;
    this.state = state;
};

/**
 * Returns the name of this field.
 */
Field.prototype.getName = function () {
    return this.component.props.name;
};

/**
 * Returns the component.
 */
Field.prototype.getComponent = function () {
    return this.component;
};

/**
 * Returns the rules specified on the component.
 */
Field.prototype.getRules = function () {
    return this.component.props.rules;
};

/**
 * Returns the path of this field.
 */
Field.prototype.getPath = function () {
    var part = this.part,
        ret = [];
    while (part) {
        if (part.key !== undefined) {
            ret.splice(0, 0, part.name + '[' + part.key + ']');
        } else {
            ret.splice(0, 0, part.name);
        }
        part = part.parent;
    }
    return ret.join('.');
};

/**
 * Returns the full name of this field.
 */
Field.prototype.getFullName = function () {
    var path = this.getPath();
    return path ? path + '.' + this.getName() : this.getName();
};

/**
 * Returns a field's state.
 */
Field.prototype.getState = function () {
    return this.state;
};

module.exports = Field;

},{}],5:[function(_dereq_,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

/**
 * Form component.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Form',

    /**
     * Properties type.
     */
    propTypes: {
        form: React.PropTypes.any.isRequired
    },

    /**
     * Called when the form is submitted.
     */
    onSubmit: function onSubmit(event) {
        event.preventDefault();

        // validate form, then call callback
        var result = this.props.form.validate(undefined, true);
        if (this.props.onSubmit) {
            this.props.onSubmit(result.valid, result.data, this.props.form);
        }

        // scroll to error
        if (this.props.scrollToError) {}
    },

    /**
     * Renders the component.
     */
    render: function render() {
        return React.createElement(
            'form',
            { className: this.props.className, noValidate: true, onSubmit: this.onSubmit },
            this.props.children
        );
    }
});

module.exports.Form = _dereq_('./form.js');
module.exports.Instance = _dereq_('./instance.js');
module.exports.Input = _dereq_('./input.js');
module.exports.Error = _dereq_('./error.js');
module.exports.FieldMixin = _dereq_('./field-mixin.js');
module.exports.Rules = _dereq_('./rules.js');
module.exports.Select = _dereq_('./select.js');
module.exports.ListenerMixin = _dereq_('./listener-mixin.js');

// TODO: find first error then .scrollIntoView();

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./error.js":1,"./field-mixin.js":3,"./form.js":5,"./input.js":7,"./instance.js":8,"./listener-mixin.js":9,"./rules.js":10,"./select.js":11}],6:[function(_dereq_,module,exports){
(function (global){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null),
    ListenerMixin = _dereq_('./listener-mixin.js');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Hint',

    /**
     * Mixins
     */
    mixins: [ListenerMixin],

    /**
     * Properties type.
     */
    propTypes: {
        display: React.PropTypes.string,
        text: React.PropTypes.string,
        form: React.PropTypes.any.isRequired,
        forName: React.PropTypes.string.isRequired
    },

    /**
     * Returns the default props.
     */
    getDefaultProps: function getDefaultProps() {
        return {
            display: 'pristine|valid'
        };
    },

    /**
     * Returns the initial state of the component.
     */
    getInitialState: function getInitialState() {
        return {
            state: this.props.form.getFieldStateByName(this.props.forName),
            display: this.parseDisplayString(this.props.display)
        };
    },

    /**
     * Called when the component's props have changed.
     */
    componentWillReceiveProps: function componentWillReceiveProps(newProps) {
        if (newProps.display !== this.props.display) {
            this.setState({
                display: this.parseDisplayString(newProps.display)
            });
        }
    },

    /**
     * Converts the display property to an object.
     */
    parseDisplayString: function parseDisplayString(display) {
        var ret = {};
        (display || '').split(/[\|,]/).forEach(function (item) {
            ret[item] = true;
        });
        return ret;
    },

    /**
     * Called by the listener mixin when the form is validated.
     */
    formDidValidate: function formDidValidate(result) {
        this.setState({
            state: this.props.form.getFieldStateByName(this.props.forName)
        });
    },

    /**
     * Renders the input.
     */
    render: function render() {
        var display = this.state.display,
            state = this.state.state;
        if (display.error && state.valid === false || display.pristine && state.validated !== true || display.valid && state.valid === true) {
            return React.createElement(
                'label',
                _extends({ className: 'hint' }, this.props, { form: null }),
                this.props.text || this.props.children
            );
        } else {
            return null;
        }
    }

});

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./listener-mixin.js":9}],7:[function(_dereq_,module,exports){
(function (global){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null),
    FieldMixin = _dereq_('./field-mixin.js'),
    ListenerMixin = _dereq_('./listener-mixin.js');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Input',

    /**
     * Mixins.
     */
    mixins: [FieldMixin, ListenerMixin],

    /**
     * Properties type.
     */
    propTypes: {
        form: React.PropTypes.any.isRequired,
        name: React.PropTypes.string.isRequired
    },

    /**
     * Called to check if the field is checked.
     */
    isChecked: function isChecked() {
        var type = this.props.type;
        if (type === 'checkbox' || type === 'radio') {
            var element = React.findDOMNode(this);
            return element.checked;
        }
    },

    /**
     * Called to check if the field is a list.
     */
    isList: function isList() {
        var type = this.props.type;
        return type === 'checkbox';
    },

    /**
     * Returns the value of the input.
     */
    getValue: function getValue() {
        var element = React.findDOMNode(this);
        return element.value;
    },

    /**
     * Called when the value of the input has changed.
     */
    onChange: function onChange(event) {
        this.validateField();

        // call parent prop
        if (this.props.onChange) {
            this.props.onChange(event);
        }
    },

    /**
     * Called when the field looses focus.
     * This forces validation of the field.
     */
    onBlur: function onBlur() {
        this.validateField(true);

        // call parent prop
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    },

    /**
     * Called by the listener mixin after the form is validated.
     */
    formDidValidate: function formDidValidate() {},

    /**
     * Returns the component's className.
     */
    className: function className(fieldState) {
        var ret = [];
        if (this.props.className) {
            ret.push(this.props.className);
        }
        if (fieldState.validated !== true) {
            ret.push('pristine');
        }
        if (fieldState.valid === false) {
            ret.push('error');
        }
        return ret.join(' ');
    },

    /**
     * Renders the input.
     */
    render: function render() {
        var fieldState = this.props.form.getFieldState(this);
        return React.createElement('input', _extends({}, this.props, { className: this.className(fieldState),
            onChange: this.onChange, onBlur: this.onBlur, form: null }));
    }

});

// TODO: implement getting the field state

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./field-mixin.js":3,"./listener-mixin.js":9}],8:[function(_dereq_,module,exports){
'use strict';

var Field = _dereq_('./field.js'),
    Rules = _dereq_('./rules.js'),
    ValidationContext = _dereq_('./validation-context.js');

/**
 * Instance class.
 * Manages the state of all the components.
 */
var Instance = function Instance(config) {
    this.fields = [];
    this.listeners = [];
    this.config = this.normalizeConfig(config);
};

/**
 * The config object can be written in different ways. This function normalizes it so that it
 * is easier to use later.
 */
Instance.prototype.normalizeConfig = function (config) {
    for (var key in config) {
        if (config.hasOwnProperty(key)) {
            if (config[key] instanceof Rules) {
                // replace by an object with rules inside
                config[key] = {
                    rules: config[key]
                };
            } else if (config.rules === undefined) {
                // recursively normalizes the config
                this.normalizeConfig(config[key]);
            }
        }
    }
    return config;
},

/**
 * Creates a sub form. Returns a proxy of the current object with an extra "part" property
 * that is used to identify subparts of a form.
 */
Instance.prototype.fieldset = function (name, key) {
    var form = function form() {};
    form.prototype = this;
    var proxy = new form();
    proxy.part = {
        parent: this.part,
        name: name,
        key: key
    };
    return proxy;
};

/**
 * Registers a component.
 */
Instance.prototype.register = function (component) {
    this.fields.push(new Field(component, this.part, { validated: false }));
};

/**
 * Unregisters a component.
 */
Instance.prototype.unregister = function (component) {
    var fields = this.fields;
    for (var i = 0; i < fields.length; i++) {
        if (fields[i].getComponent() === component) {
            fields.splice(i, 1);
            break;
        }
    }
};

/**
 * Registers a listener.
 */
Instance.prototype.addListener = function (object) {
    this.listeners.push(object);
};

/**
 * Unregisters a listener.
 */
Instance.prototype.removeListener = function (object) {
    // remove object from list of listeners
    var index = this.listeners.indexOf(object);
    if (index !== -1) {
        this.listeners.splice(index, 1);
    }
};

/**
 * Returns the information that this class stores about a component.
 */
Instance.prototype.getField = function (component) {
    var fields = this.fields;
    for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        if (field.getComponent() === component) {
            return field;
        }
    }
};

/**
 * Returns a field's state.
 */
Instance.prototype.getFieldState = function (component) {
    var field = this.getField(component);
    if (field) {
        return field.getState();
    }
};

Instance.prototype.getFieldsetPath = function (fieldOrForm) {
    var part = fieldOrForm.part,
        ret = [];
    while (part) {
        ret.push(part.name + (part.key ? '[' + part.key + ']' : ''));
        part = part.parent;
    }
    return ret.join('.');
};

/**
 * Returns the information that this class stores about a component by looking for its name.
 * Will only search in the current fieldset (if in a fieldset).
 */
Instance.prototype.getFieldByName = function (name) {
    var fields = this.fields;
    for (var i = 0; i < fields.length; i++) {
        var field = fields[i],
            fieldName = field.component.props.name;
        if (fieldName === name && this.getFieldsetPath(this) === this.getFieldsetPath(field)) {
            return field;
        }
    }
};

/**
 * Returns a field's state by looking for its name.
 * Will only search in the current fieldset (if in a fieldset).
 */
Instance.prototype.getFieldStateByName = function (name) {
    var data = this.getFieldByName(name);
    if (data) {
        return data.state;
    }
};

/**
 * Returns the values of all the fields.
 */
Instance.prototype.getFieldsData = function () {
    var ret = {};

    // get all the fields
    this.fields.forEach(function (field) {
        var fullName = field.getFullName();
        if (!ret[fullName]) {
            ret[fullName] = {
                fields: []
            };
        }
        ret[fullName].fields.push(field);
    }, this);

    // compute values for all the fields
    for (var key in ret) {
        if (ret.hasOwnProperty(key)) {
            var data = ret[key],
                firstField = data.fields[0],
                firstComponent = firstField.component,
                isList = firstComponent.isList ? firstComponent.isList() : false;

            // prepare lists
            if (isList) {
                data.value = [];
                data.fields.forEach(function (field) {
                    var component = field.component,
                        checked = component.isChecked ? component.isChecked() : true;
                    if (checked === undefined || checked === true) {
                        data.value.push(field.component.getValue());
                    }
                });
            } else {
                if (data.fields.length > 1) {
                    data.fields.forEach(function (field) {
                        var component = field.component,
                            checked = component.isChecked ? component.isChecked() : true;
                        if (checked === true) {
                            data.value = component.getValue();
                        }
                    });
                } else {
                    var checked = firstComponent.isChecked ? firstComponent.isChecked() : true;
                    if (checked === undefined || checked === true) {
                        data.value = firstComponent.getValue();
                    }
                }
            }
        }
    }

    return ret;
};

/**
 * Processes extract form data to have a better formated object.
 *
 * my.key.prop => {my: {key: {prop: ?}}}
 * my.key[?].prop => {my: {key: [{prop: ?}]}}
 */
Instance.prototype.refineData = function (data) {
    var ret = {};

    var parseKey = function parseKey(key) {
        var paths = key.split('.');
        return paths.map(function (path) {
            var parts = path.match(/([^\[]*)(\[(.*?)\])?/),
                key = parts[1],
                index = parts[3];
            return {
                key: key,
                index: index,
                isList: !!index
            };
        });
    };

    var setValue = function setValue(obj, paths, value) {
        for (var i = 0; i < paths.length; i++) {
            var path = paths[i],
                isLast = i === paths.length - 1;

            // create object
            if (path.isList) {
                if (!obj[path.key]) {
                    obj[path.key] = [];
                }
                if (isLast) {
                    obj[path.key][path.index] = value;
                } else {
                    obj = obj[path.key][path.index] = obj[path.key][path.index] || {};
                }
            } else {
                if (isLast) {
                    obj[path.key] = value;
                } else {
                    obj = obj[path.key] = obj[path.key] || {};
                }
            }
        }
    };

    // create objects out of keys that contains dots.
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            var value = data[key],
                paths = parseKey(key);
            setValue(ret, paths, value.value);
        }
    }

    return ret;
};

/**
 * Returns the rules that apply for a given field.
 */
Instance.prototype.getRulesForField = function (field) {
    // any special rules defined on that field?
    var fieldRules = field.getRules();
    if (fieldRules) {
        return fieldRules;
    } else {
        // get full name minus the [keys].
        var path = field.getFullName().replace(/\[[^\]+]\]/g, '').split('.'),
            configField = this.config.fields;

        // traverse config to where the rules should be
        while (path.length > 0 && configField) {
            configField = configField[path.shift()];
        }

        if (configField) {
            return configField.rules;
        }
    }
};

/**
 * Validates a field.
 */
Instance.prototype.validateField = function (field, data, force) {
    var rules = this.getRulesForField(field);
    if (rules) {
        var fullName = field.getFullName(),
            state = data[fullName],
            firstField = state.fields[0];

        // if field hasn't been validated yet, only validate it if force is true
        if (!firstField.state.validated && !force) {
            return;
        }

        // mark fields as validated
        state.fields.forEach(function (field) {
            field.state.validated = true;
        });

        // validate field value
        var result = rules.validate(state.value, new ValidationContext(data, field));
        if (result !== true) {
            state.fields.forEach(function (field) {
                field.state.valid = false;
                field.state.error = result.message;
            });
            return false;
        }

        // update fields state
        state.fields.forEach(function (field) {
            field.state.valid = true;
            field.state.error = null;
        });

        return true;
    }
};

/**
 * Validates all the fields or the field given as parameter.
 */
Instance.prototype.validate = function (target, force) {
    var data = this.getFieldsData();

    var valid = true;
    if (target) {
        // validate just one field
        var field = target.props.form.getFieldByName(target.props.name);
        valid &= this.validateField(field, data, force);
    } else {
        // validate all the fields
        this.fields.forEach(function (field) {
            valid &= this.validateField(field, data, force);
        }, this);
    }

    // prepare result
    var ret = {
        valid: valid,
        state: data,
        data: this.refineData(data)
    };

    // call listeners
    this.listeners.forEach(function (listener) {
        if (listener.formDidValidate) {
            listener.formDidValidate(ret);
        }
    });

    return ret;
};

module.exports = Instance;

},{"./field.js":4,"./rules.js":10,"./validation-context.js":12}],9:[function(_dereq_,module,exports){
'use strict';

/**
 * This mixin registers the component as a listener in the parent form.
 *
 * Required props:
 *   - form, the form owning the component
 *
 * The following functions can be implement:
 *   - formDidValidate
 */
module.exports = {
    /**
     * When the component will mount register it in the form.
     */
    componentWillMount: function componentWillMount() {
        if (this.props.form) {
            this.props.form.addListener(this);
        }
    },

    /**
     * When the component is removed, unregister it from the form.
     */
    componentWillUnmount: function componentWillUnmount() {
        if (this.props.form) {
            this.props.form.removeListener(this);
        }
    }
};

},{}],10:[function(_dereq_,module,exports){
'use strict';

var EMAIL_REGEXP = new RegExp('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]' + '{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$');

/**
 * Constructor of the Rules class.
 */
var Rules = function Rules(config) {
    this.rules = [];
};

/**
 * Custom exception that if thrown means that the validation can stop and the field is valid.
 */
Rules.OPTIONAL_EXCEPTION = 'OPTIONAL_EXCEPTION';

/**
 * Registers a new rule.
 */
Rules.register = function (name, rule) {
    Rules.prototype[name] = function () {
        this.rules.push(rule.apply(null, arguments));
        return this;
    };
    Rules[name] = function () {
        var rules = new Rules();
        rules[name].apply(rules, arguments);
        return rules;
    };
};

/**
 * Validates that the rules are all valid
 */
Rules.prototype.validate = function (value, context) {
    try {
        for (var i = 0; i < this.rules.length; i++) {
            var rule = this.rules[i],
                valid = rule.check(value, context);

            // validate returned Rules objects
            if (valid instanceof Rules) {
                return valid.validate(value, context);
            }

            // not valid?
            if (valid !== true) {
                return {
                    error: valid,
                    message: valid === false ? rule.message : rule.messages[valid]
                };
            }
        }
    } catch (e) {
        if (e !== Rules.OPTIONAL_EXCEPTION) {
            throw e;
        }
    }
    return true;
};

/**
 * Registers a rule that
 */
Rules.register('onlyIf', function (fn) {
    return {
        check: function check(value, context) {
            var res = fn(value, context);
            if (!res) {
                throw Rules.OPTIONAL_EXCEPTION;
            }
            return true;
        }
    };
});

/**
 * Registers a rule for optional values.
 */
Rules.register('optional', function () {
    return {
        check: function check(value) {
            if (value === undefined || value === '') {
                throw Rules.OPTIONAL_EXCEPTION;
            }
            return true;
        }
    };
});

/**
 * Registers a rule for optional values.
 */
Rules.register('custom', function (fn) {
    return {
        check: function check(value, context) {
            return fn(value, context) || true;
        }
    };
});

/**
 * Registers a rule that checks if something is not empty.
 */
Rules.register('required', function (message) {
    return {
        check: function check(value) {
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
        message: message || 'This field is required.'
    };
});

/**
 * Registers a rule for validating an email.
 */
Rules.register('email', function () {
    return {
        check: function check(value) {
            return EMAIL_REGEXP.test(value);
        },
        message: 'This is not a valid email address'
    };
});

/**
 * Registers a rule for validating an integer.
 */
Rules.register('integer', function (message) {
    return {
        check: function check(value) {
            return /^[0-9]+$/.test(value);
        },
        message: message || 'This is not a valid integer'
    };
});

/**
 * Registers a rule for validating using regexes.
 */
Rules.register('regex', function (regex, message) {
    return {
        check: function check(value) {
            return regex.test(value);
        },
        message: message || 'This field does not match ' + regex
    };
});

/**
 * Registers a rule for checking that something equals something else.
 */
Rules.register('equals', function (otherFieldName) {
    return {
        check: function check(value, context) {
            return context.getFieldValue(otherFieldName) === value;
        },
        message: 'This field does not match ' + otherFieldName
    };
});

/**
 * Registers a rule for validating password.
 */
Rules.register('password', function () {
    return {
        check: function check(value) {
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
        messages: {
            length: 'Password should be at least 8 characters',
            upper: 'Password should contain at least one uppercase letter',
            lower: 'Password should contain at least one lowercase letter',
            num: 'Password should contain at least one number'
        }
    };
});

/**
 * Registers a rule for validating minimum age.
 */
Rules.register('minAge', function (minAge) {
    return {
        check: function check(value) {
            var diff = new Date(Date.now() - value.getTime()),
                age = Math.abs(diff.getUTCFullYear() - 1970);
            return age >= minAge;
        },
        message: 'You must be at least ' + minAge + ' years old.'
    };
});

/**
 * Export the class.
 */
module.exports = Rules;

},{}],11:[function(_dereq_,module,exports){
(function (global){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null),
    FieldMixin = _dereq_('./field-mixin.js');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Select',

    /**
     * Mixins.
     */
    mixins: [FieldMixin],

    /**
     * Properties type.
     */
    propTypes: {
        form: React.PropTypes.any.isRequired,
        name: React.PropTypes.string.isRequired
    },

    /**
     * Returns the value of the input.
     */
    getValue: function getValue() {
        var element = React.findDOMNode(this);
        return element.value;
    },

    /**
     * Called when the value of the input has changed.
     */
    onChange: function onChange() {
        this.validateField(true);
    },

    /**
     * Returns the component's className.
     */
    rootClassName: function rootClassName(fieldState) {
        var ret = [];
        if (this.props.className) {
            ret.push(this.props.className);
        }
        if (fieldState.pristine) {
            ret.push('pristine');
        }
        if (!fieldState.valid) {
            ret.push('error');
        }
        return ret.join(' ');
    },

    /**
     * Renders the select.
     */
    render: function render() {
        var fieldState = this.props.form.getFieldState(this);
        return React.createElement(
            'select',
            _extends({}, this.props, { className: this.rootClassName(fieldState),
                onChange: this.onChange, onBlur: this.onBlur }),
            this.props.children
        );
    }

});

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./field-mixin.js":3}],12:[function(_dereq_,module,exports){
'use strict';

/**
 * ValidationContext class.
 * Simplifies access to data during validation.
 */
var ValidationContext = function ValidationContext(data, field) {
    this.data = data;
    this.field = field;
};

/**
 * Returns the value a field from its name.
 * It searches the closest field with the given name.
 */
ValidationContext.prototype.getFieldValue = function (name) {
    var fieldPath = this.field.getPath(),
        possibleFullName = fieldPath ? fieldPath + '.' + name : name;

    while (true) {
        if (this.data[possibleFullName]) {
            return this.data[possibleFullName].value;
        } else {
            if (possibleFullName.indexOf('.') !== -1) {
                var parts = /(.*\.)([^.]+\.)([^\.]+)$/.exec(possibleFullName);
                possibleFullName = parts[1] ? parts[1] + parts[3] : parts[3];
            } else {
                break;
            }
        }
    }
};

/**
 * Returns the raw data from the form.
 */
ValidationContext.prototype.getData = function () {
    return this.data;
};

module.exports = ValidationContext;

},{}]},{},[2])
(2)
});