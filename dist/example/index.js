(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Form = require('../src/form.js'),
    FieldMixin = Form.FieldMixin,
    Error = Form.Error;

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'BirthdateField',

    /**
     * Make this component a "Field".
     *
     * Component will require the following props:
     *   - form, the form owning the component
     *   - name, the name of this component in the form.
     *
     * Component will require the following methods:
     *   - getValue(), should return the value of the current component.
     */
    mixins: [FieldMixin],

    /**
     * Returns the value of the component. This will be used during form validation to
     * check that the value is valid.
     * This component a Date object as value.
     */
    getValue: function getValue() {
        var day = React.findDOMNode(this.refs.day).value,
            month = React.findDOMNode(this.refs.month).value,
            year = React.findDOMNode(this.refs.year).value;
        if (day && month && year) {
            return new Date(year, month, day);
        }
    },

    /**
     * Called when one of the <select> selection has changed.
     * We need to tell the form that our custom component value has changed.
     */
    onChange: function onChange() {
        if (this.props.form) {
            this.props.form.onChange(this);
        }
    },

    /**
     * Renders the options for the day <select>.
     */
    renderDayOptions: function renderDayOptions() {
        var ret = [];
        ret.push(React.createElement(
            'option',
            { key: -1, value: '' },
            'Day'
        ));
        for (var i = 1; i < 32; i++) {
            ret.push(React.createElement(
                'option',
                { key: i, value: i },
                i
            ));
        }
        return ret;
    },

    /**
     * Renders the options for the month <select>.
     */
    renderMonthOptions: function renderMonthOptions() {
        return [React.createElement(
            'option',
            { key: -1, value: '' },
            'Month'
        ), React.createElement(
            'option',
            { key: 0, value: 0 },
            'January'
        ), React.createElement(
            'option',
            { key: 1, value: 1 },
            'February'
        ), React.createElement(
            'option',
            { key: 2, value: 2 },
            'March'
        ), React.createElement(
            'option',
            { key: 3, value: 3 },
            'April'
        ), React.createElement(
            'option',
            { key: 4, value: 4 },
            'May'
        ), React.createElement(
            'option',
            { key: 5, value: 5 },
            'June'
        ), React.createElement(
            'option',
            { key: 6, value: 6 },
            'July'
        ), React.createElement(
            'option',
            { key: 7, value: 7 },
            'August'
        ), React.createElement(
            'option',
            { key: 8, value: 8 },
            'September'
        ), React.createElement(
            'option',
            { key: 9, value: 9 },
            'October'
        ), React.createElement(
            'option',
            { key: 10, value: 10 },
            'November'
        ), React.createElement(
            'option',
            { key: 11, value: 11 },
            'December'
        )];
    },

    /**
     * Renders the options for the year <select>.
     */
    renderYearOptions: function renderYearOptions() {
        var ret = [],
            currentYear = new Date().getFullYear();
        ret.push(React.createElement(
            'option',
            { key: -1, value: '' },
            'Year'
        ));
        for (var i = 0; i < 100; i++) {
            var year = currentYear - i;
            ret.push(React.createElement(
                'option',
                { key: year, value: year },
                year
            ));
        }
        return ret;
    },

    /**
     * Renders the component.
     */
    render: function render() {
        return React.createElement(
            'div',
            { className: 'field' },
            'Birthdate:',
            React.createElement(
                'select',
                { name: 'day', ref: 'day', onChange: this.onChange },
                this.renderDayOptions()
            ),
            React.createElement(
                'select',
                { name: 'month', ref: 'month', onChange: this.onChange },
                this.renderMonthOptions()
            ),
            React.createElement(
                'select',
                { name: 'year', ref: 'year', onChange: this.onChange },
                this.renderYearOptions()
            ),
            React.createElement(Error, { forName: this.props.name, form: this.props.form })
        );
    }
});

},{"../src/form.js":9}],2:[function(require,module,exports){
'use strict';

var Form = require('../src/form.js'),
    Input = Form.Input,
    Error = Form.Error;

/**
 * This example shows the basic and also advance features of react-form-validation.
 */
var RegistrationForm = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Child',

    /**
     * Renders the child form.
     */
    render: function render() {
        var form = this.props.form;
        return React.createElement(
            'div',
            { className: 'fielset child' },
            React.createElement(
                'a',
                { href: '#', className: 'remove', onClick: this.props.onClickRemove.bind(this, this) },
                'X'
            ),
            React.createElement(
                'div',
                { className: 'field' },
                'Name: ',
                React.createElement(Input, { name: 'name', type: 'text', form: form }),
                React.createElement(Error, { forName: 'name', form: form })
            ),
            React.createElement(
                'div',
                { className: 'field' },
                'Password: ',
                React.createElement(Input, { name: 'password', type: 'text', form: form }),
                React.createElement(Error, { forName: 'password', form: form })
            ),
            React.createElement(
                'div',
                { className: 'field' },
                'Confirm Password: ',
                React.createElement(Input, { name: 'confirmPassword', type: 'text', form: form }),
                React.createElement(Error, { forName: 'confirmPassword', form: form })
            )
        );
    }
});

},{"../src/form.js":9}],3:[function(require,module,exports){
'use strict';

var Form = require('../src/form.js'),
    Rules = Form.Rules;

/**
 * Registers a rule for validating password.
 */
Rules.register('customUsername', function () {
    return {
        check: function check(value) {
            if (!value || value.length < 5) {
                return 'length';
            }
            if (!/[0-9]+$/.test(value)) {
                return 'syntax';
            }
            return true;
        },
        messages: {
            length: 'Username should be at least 5 characters',
            syntax: 'Username should end with numbers'
        }
    };
});

/**
 * Registers a rule for validating password.
 */
Rules.register('minLikes', function (min) {
    return {
        check: function check(value) {
            if (!value || value.length < min) {
                return false;
            }
            return true;
        },
        message: 'You have to pick at least ' + min + ' likes'
    };
});

},{"../src/form.js":9}],4:[function(require,module,exports){

// render page
'use strict';

var Registration = require('./registration.js');
React.render(React.createElement(Registration, null), document.getElementById('registration-form'));

},{"./registration.js":5}],5:[function(require,module,exports){
'use strict';

var BirthdateField = require('./birthdate-field.js'),
    CustomRules = require('./custom-rules.js'),
    Child = require('./child.js'),
    Form = require('../src/form.js'),
    Input = Form.Input,
    Select = Form.Select,
    Rules = Form.Rules,
    Error = Form.Error;

/**
 * This example shows the basic and also advance features of react-form-validation.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Registration',

    /**
     * Returns the initial state of our component.
     */
    getInitialState: function getInitialState() {
        return {
            form: this.createForm(),
            children: [1]
        };
    },

    /**
     * Called when the user clicks on the "Add" link.
     */
    onClickAddChild: function onClickAddChild(event) {
        event.preventDefault();

        // add an extra child id in the list of children
        var children = this.state.children,
            last = children.length ? children[children.length - 1] : null;
        this.setState({
            children: children.concat(last ? last + 1 : 1)
        });
    },

    /**
     * Called when the user clicks on the remove link of a child
     */
    onClickRemoveChild: function onClickRemoveChild(child) {
        event.preventDefault();

        var children = this.state.children,
            index = children.indexOf(child);
        this.setState({
            children: children.slice(0, index).concat(children.slice(index + 1))
        });
    },

    /**
     * Creates a form instance that will be given to all fields of the page.
     * The form instance manages the form state and its validation.
     */
    createForm: function createForm() {
        return new Form.Instance({
            fields: {
                name: Rules.required(),
                // customUsername is a custom rule defined in custom-rules.js
                username: Rules.required().customUsername(),
                email: Rules.required().email(),
                password: Rules.required().password(),
                confirmPassword: Rules.equals('password'),
                birthdate: Rules.required().minAge(13),
                likes: Rules.custom(function (value, context) {
                    var type = context.getFieldValue('type');
                    if (type === 'male') {
                        // minLikes is a custom rule defined in custom-rules.js
                        return Rules.minLikes(2);
                    } else if (type === 'female') {
                        return Rules.minLikes(3);
                    }
                }),
                terms: Rules.onlyIf(function (value, context) {
                    return context.getFieldValue('type') === 'male';
                }).required('You have to agree to the terms and conditions'),
                child: {
                    name: Rules.required(),
                    password: Rules.required().password(),
                    confirmPassword: Rules.equals('password')
                } /*,
                  childrenCount: {
                     virtual: true,
                     rules: function(data) {
                         console.log('data', data);
                     }
                  }*/
            }
        });
    },

    /**
     * Called when the form is submitted (either the user has pressed enter or clicked the
     * save button).
     */
    onSubmit: function onSubmit(valid, data) {
        this.setState({
            data: data,
            valid: valid
        });
    },

    /**
     * Renders the child account fields.
     */
    renderChildAccountFields: function renderChildAccountFields(form) {
        var ret = [],
            children = this.state.children;
        for (var i = 0; i < children.length; i++) {
            var formPart = form.fieldset('child', i);
            ret.push(React.createElement(
                'div',
                { className: 'fielset child', key: children[i] },
                React.createElement(
                    'a',
                    { href: '#', className: 'remove',
                        onClick: this.onClickRemoveChild.bind(this, children[i]) },
                    'X'
                ),
                React.createElement(
                    'div',
                    { className: 'field' },
                    'Name: ',
                    React.createElement(Input, { name: 'name', type: 'text', form: formPart }),
                    React.createElement(Error, { forName: 'name', form: formPart })
                ),
                React.createElement(
                    'div',
                    { className: 'field' },
                    'Password: ',
                    React.createElement(Input, { name: 'password', type: 'text', form: formPart }),
                    React.createElement(Error, { forName: 'password', form: formPart })
                ),
                React.createElement(
                    'div',
                    { className: 'field' },
                    'Confirm Password: ',
                    React.createElement(Input, { name: 'confirmPassword', type: 'text', form: formPart }),
                    React.createElement(Error, { forName: 'confirmPassword', form: formPart })
                )
            ));
        }
        return ret;
    },

    /**
     * Returns the state of the form when submitted
     */
    renderSubmittedState: function renderSubmittedState() {
        if (this.state.valid !== undefined) {
            return React.createElement(
                'div',
                { className: 'form-data' },
                'Valid: ',
                this.state.valid.toString(),
                React.createElement('br', null),
                'Data: ',
                React.createElement('br', null),
                JSON.stringify(this.state.data, null, 4)
            );
        }
    },

    /**
     * Renders the form.
     */
    render: function render() {
        var form = this.state.form;
        return React.createElement(
            Form,
            { form: form, onSubmit: this.onSubmit },
            React.createElement(
                'h1',
                null,
                'Registration Form Example'
            ),
            React.createElement(Input, { name: 'id', type: 'hidden', defaultValue: '123', form: form }),
            React.createElement(
                'div',
                { className: 'field' },
                'Name: ',
                React.createElement(Input, { name: 'name', type: 'text', form: form }),
                React.createElement(Error, { forName: 'name', form: form })
            ),
            React.createElement(
                'div',
                { className: 'field' },
                'Username: ',
                React.createElement(Input, { name: 'username', type: 'text', form: form, rules: Rules.required() }),
                React.createElement(Error, { forName: 'username', form: form })
            ),
            React.createElement(
                'div',
                { className: 'field' },
                'Email: ',
                React.createElement(Input, { name: 'email', type: 'text', form: form }),
                React.createElement(Error, { forName: 'email', form: form })
            ),
            React.createElement(
                'div',
                { className: 'field' },
                'Password: ',
                React.createElement(Input, { name: 'password', type: 'password', form: form }),
                React.createElement(Error, { forName: 'password', form: form })
            ),
            React.createElement(
                'div',
                { className: 'field' },
                'Confirm Password: ',
                React.createElement(Input, { name: 'confirmPassword', type: 'password', form: form }),
                React.createElement(Error, { forName: 'confirmPassword', form: form })
            ),
            React.createElement(BirthdateField, { name: 'birthdate', form: form }),
            React.createElement(
                'div',
                { className: 'field' },
                React.createElement(
                    'label',
                    null,
                    React.createElement(Input, { name: 'type', type: 'radio', form: form, value: 'male' }),
                    ' Male'
                ),
                React.createElement(
                    'label',
                    null,
                    React.createElement(Input, { name: 'type', type: 'radio', form: form, value: 'female' }),
                    ' Female'
                ),
                React.createElement(Error, { forName: 'type', form: form })
            ),
            React.createElement(
                'div',
                { className: 'field' },
                'Likes:',
                React.createElement('br', null),
                React.createElement(
                    'label',
                    null,
                    React.createElement(Input, { name: 'likes', type: 'checkbox', value: 'movies', form: form }),
                    ' Movies'
                ),
                React.createElement('br', null),
                React.createElement(
                    'label',
                    null,
                    React.createElement(Input, { name: 'likes', type: 'checkbox', value: 'books', form: form }),
                    ' Books'
                ),
                React.createElement('br', null),
                React.createElement(
                    'label',
                    null,
                    React.createElement(Input, { name: 'likes', type: 'checkbox', value: 'sports', form: form }),
                    ' Sports'
                ),
                React.createElement('br', null),
                React.createElement(
                    'label',
                    null,
                    React.createElement(Input, { name: 'likes', type: 'checkbox', value: 'shows', form: form }),
                    ' Shows'
                ),
                React.createElement('br', null),
                React.createElement(Error, { forName: 'likes', form: form })
            ),
            React.createElement(
                'div',
                { className: 'field' },
                'Child accounts [ ',
                React.createElement(
                    'a',
                    { href: '#', onClick: this.onClickAddChild },
                    'Add'
                ),
                ' ]:',
                React.createElement('br', null),
                this.renderChildAccountFields(form),
                React.createElement(Error, { forName: 'childrenCount', form: form })
            ),
            React.createElement(
                'div',
                { className: 'field' },
                React.createElement(Input, { name: 'terms', type: 'checkbox', value: 'accept', form: form }),
                'Accept Terms',
                React.createElement(Error, { forName: 'terms', form: form })
            ),
            React.createElement(
                'div',
                { className: 'actions' },
                React.createElement(
                    'button',
                    { type: 'submit' },
                    'Register'
                )
            ),
            this.renderSubmittedState()
        );
    }
});

},{"../src/form.js":9,"./birthdate-field.js":1,"./child.js":2,"./custom-rules.js":3}],6:[function(require,module,exports){
(function (global){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null),
    ListenerMixin = require('./listener-mixin.js');

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
},{"./listener-mixin.js":12}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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
     * Called when the form is submitted.
     */
    onSubmit: function onSubmit(event) {
        event.preventDefault();

        // validate form, then call callback
        var result = this.props.form.validate(undefined, true);
        this.props.onSubmit(result.valid, result.data, this.props.form);

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

module.exports.Form = require('./form.js');
module.exports.Instance = require('./instance.js');
module.exports.Input = require('./input.js');
module.exports.Error = require('./error.js');
module.exports.FieldMixin = require('./field-mixin.js');
module.exports.Rules = require('./rules.js');
module.exports.Select = require('./select.js');
module.exports.ListenerMixin = require('./listener-mixin.js');

// TODO: find first error then .scrollIntoView();

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./error.js":6,"./field-mixin.js":7,"./form.js":9,"./input.js":10,"./instance.js":11,"./listener-mixin.js":12,"./rules.js":13,"./select.js":14}],10:[function(require,module,exports){
(function (global){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null),
    FieldMixin = require('./field-mixin.js'),
    ListenerMixin = require('./listener-mixin.js');

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
},{"./field-mixin.js":7,"./listener-mixin.js":12}],11:[function(require,module,exports){
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

},{"./field.js":8,"./rules.js":13,"./validation-context.js":15}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
(function (global){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null),
    FieldMixin = require('./field-mixin.js');

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
},{"./field-mixin.js":7}],15:[function(require,module,exports){
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

},{}]},{},[4])