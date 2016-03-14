'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Context = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fieldState = require('./field-state.js');

var _rules = require('./rules.js');

var _validationContext = require('./validation-context.js');

var _errors = require('./errors.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Context class.
 * Manages the state of all the components.
 */

var Context = exports.Context = function () {
    /**
     * Constructor.
     */

    function Context(config) {
        _classCallCheck(this, Context);

        this.fields = [];
        this.listeners = [];
        this.config = this.normalizeConfig(config);
    }

    _createClass(Context, [{
        key: 'normalizeConfig',


        /**
         * The config object can be written in different ways. This function normalizes it so that it
         * is easier to use later.
         */
        value: function normalizeConfig(config) {
            for (var key in config) {
                if (config.hasOwnProperty(key)) {
                    if (config[key] instanceof _rules.Rules) {
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
        }

        /**
         * Registers a component.
         */

    }, {
        key: 'register',
        value: function register(component) {
            this.fields.push(new _fieldState.FieldState(component, { validated: false }));
        }
    }, {
        key: 'unregister',


        /**
         * Unregisters a component.
         */
        value: function unregister(component) {
            var fields = this.fields;
            for (var i = 0; i < fields.length; i++) {
                if (fields[i].getComponent() === component) {
                    fields.splice(i, 1);
                    break;
                }
            }
        }
    }, {
        key: 'addListener',


        /**
         * Registers a listener.
         */
        value: function addListener(object) {
            this.listeners.push(object);
        }
    }, {
        key: 'removeListener',


        /**
         * Unregisters a listener.
         */
        value: function removeListener(object) {
            // remove object from list of listeners
            var index = this.listeners.indexOf(object);
            if (index !== -1) {
                this.listeners.splice(index, 1);
            }
        }
    }, {
        key: 'getField',


        /**
         * Returns the information that this class stores about a component.
         */
        value: function getField(component) {
            var fields = this.fields;
            for (var i = 0; i < fields.length; i++) {
                var field = fields[i];
                if (field.getComponent() === component) {
                    return field;
                }
            }
        }
    }, {
        key: 'getFieldState',


        /**
         * Returns a field's state.
         */
        value: function getFieldState(component) {
            var field = this.getField(component);
            if (field) {
                return field.getState();
            }
        }
    }, {
        key: 'getFieldByName',


        /**
         * Returns the information that this class stores about a component by looking for its name.
         */
        value: function getFieldByName(name) {
            var fields = this.fields;
            for (var i = 0; i < fields.length; i++) {
                var field = fields[i],
                    fieldName = field.getName();
                if (fieldName === name) {
                    return field;
                }
            }
        }
    }, {
        key: 'getFieldStateByName',


        /**
         * Returns a field's state by looking for its name.
         */
        value: function getFieldStateByName(name) {
            var data = this.getFieldByName(name);
            if (data) {
                return data.state;
            }
        }
    }, {
        key: 'getFieldsData',


        /**
         * Returns the values of all the fields.
         */
        value: function getFieldsData() {
            var ret = {},
                getComponentValue = function getComponentValue(component) {
                try {
                    return component.getValue();
                } catch (e) {
                    // return errors as FieldValueError
                    if (e instanceof _errors.FieldValueError) {
                        return e;
                    } else {
                        return new _errors.FieldValueError('exception', e);
                    }
                }
            };

            // get all the fields
            this.fields.forEach(function (field) {
                var name = field.getName();
                if (!ret[name]) {
                    ret[name] = {
                        fields: []
                    };
                }
                ret[name].fields.push(field);
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
                                data.value.push(getComponentValue(field.component));
                            }
                        });
                    } else {
                        if (data.fields.length > 1) {
                            data.fields.forEach(function (field) {
                                var component = field.component,
                                    checked = component.isChecked ? component.isChecked() : true;
                                if (checked === true) {
                                    data.value = getComponentValue(component);
                                }
                            });
                        } else {
                            var checked = firstComponent.isChecked ? firstComponent.isChecked() : true;
                            if (checked === undefined || checked === true) {
                                data.value = getComponentValue(firstComponent);
                            }
                        }
                    }
                }
            }

            return ret;
        }
    }, {
        key: 'refineData',


        /**
         * Processes extract form data to have a better formated object.
         *
         * my.key.prop => {my: {key: {prop: ?}}}
         * my.key[?].prop => {my: {key: [{prop: ?}]}}
         */
        value: function refineData(data) {
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
        }
    }, {
        key: 'getRulesForField',


        /**
         * Returns the rules that apply for a given field.
         */
        value: function getRulesForField(field) {
            // any special rules defined on that field?
            var fieldRules = field.getRules();
            if (fieldRules) {
                return fieldRules;
            } else {
                // get full name minus the [keys].
                var path = field.getName().replace(/\[[^\]+]\]/g, '').split('.'),
                    configField = this.config.fields;

                // traverse config to where the rules should be
                while (path.length > 0 && configField) {
                    configField = configField[path.shift()];
                }

                if (configField) {
                    return configField.rules;
                }
            }
        }

        /**
         * Validates a field.
         */

    }, {
        key: 'validateField',
        value: function validateField(field, data, force) {
            var rules = this.getRulesForField(field);
            if (rules) {
                var name = field.getName(),
                    state = data[name],
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
                var result = rules.validate(state.value, new _validationContext.ValidationContext(data, field));
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
        }

        /**
         * Validates all the fields or the field given as parameter.
         */

    }, {
        key: 'validate',
        value: function validate(target, force) {
            var data = this.getFieldsData();

            var valid = true;
            if (target) {
                // validate just one field
                var field = this.getFieldByName(target.props.name);
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
        }
    }]);

    return Context;
}();