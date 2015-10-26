'use strict';

var Field = require('./field.js'),
    Rules = require('./rules.js'),
    ValidationContext = require('./validation-context.js');

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