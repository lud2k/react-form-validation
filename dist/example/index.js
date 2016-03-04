(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _srcIndexJs = require('../src/index.js');

var BirthdateField = (function (_Field) {
    _inherits(BirthdateField, _Field);

    function BirthdateField() {
        _classCallCheck(this, BirthdateField);

        _get(Object.getPrototypeOf(BirthdateField.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(BirthdateField, [{
        key: 'getValue',

        /**
         * Returns the value of the component. This will be used during form validation to
         * check that the value is valid.
         * This component a Date object as value.
         */
        value: function getValue() {
            var day = this.refs.day.value,
                month = this.refs.month.value,
                year = this.refs.year.value;
            if (day && month && year) {
                return new Date(year, month, day);
            }
        }

        /**
         * Called when one of the <select> selection has changed.
         * We need to tell the form that our custom component value has changed.
         */
    }, {
        key: 'onChange',
        value: function onChange() {
            var force = this.refs.day.value && this.refs.month.value && this.refs.year.value;
            this.validateField(force);
        }

        /**
         * Renders the options for the day <select>.
         */
    }, {
        key: 'renderDayOptions',
        value: function renderDayOptions() {
            var ret = [];
            ret.push(_react2['default'].createElement(
                'option',
                { key: -1, value: '' },
                'Day'
            ));
            for (var i = 1; i < 32; i++) {
                ret.push(_react2['default'].createElement(
                    'option',
                    { key: i, value: i },
                    i
                ));
            }
            return ret;
        }

        /**
         * Renders the options for the month <select>.
         */
    }, {
        key: 'renderMonthOptions',
        value: function renderMonthOptions() {
            return [_react2['default'].createElement(
                'option',
                { key: -1, value: '' },
                'Month'
            ), _react2['default'].createElement(
                'option',
                { key: 0, value: 0 },
                'January'
            ), _react2['default'].createElement(
                'option',
                { key: 1, value: 1 },
                'February'
            ), _react2['default'].createElement(
                'option',
                { key: 2, value: 2 },
                'March'
            ), _react2['default'].createElement(
                'option',
                { key: 3, value: 3 },
                'April'
            ), _react2['default'].createElement(
                'option',
                { key: 4, value: 4 },
                'May'
            ), _react2['default'].createElement(
                'option',
                { key: 5, value: 5 },
                'June'
            ), _react2['default'].createElement(
                'option',
                { key: 6, value: 6 },
                'July'
            ), _react2['default'].createElement(
                'option',
                { key: 7, value: 7 },
                'August'
            ), _react2['default'].createElement(
                'option',
                { key: 8, value: 8 },
                'September'
            ), _react2['default'].createElement(
                'option',
                { key: 9, value: 9 },
                'October'
            ), _react2['default'].createElement(
                'option',
                { key: 10, value: 10 },
                'November'
            ), _react2['default'].createElement(
                'option',
                { key: 11, value: 11 },
                'December'
            )];
        }

        /**
         * Renders the options for the year <select>.
         */
    }, {
        key: 'renderYearOptions',
        value: function renderYearOptions() {
            var ret = [],
                currentYear = new Date().getFullYear();
            ret.push(_react2['default'].createElement(
                'option',
                { key: -1, value: '' },
                'Year'
            ));
            for (var i = 0; i < 100; i++) {
                var year = currentYear - i;
                ret.push(_react2['default'].createElement(
                    'option',
                    { key: year, value: year },
                    year
                ));
            }
            return ret;
        }

        /**
         * Renders the component.
         */
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'field' },
                'Birthdate:',
                _react2['default'].createElement(
                    'select',
                    { name: 'day', ref: 'day', onChange: this.onChange.bind(this) },
                    this.renderDayOptions()
                ),
                _react2['default'].createElement(
                    'select',
                    { name: 'month', ref: 'month', onChange: this.onChange.bind(this) },
                    this.renderMonthOptions()
                ),
                _react2['default'].createElement(
                    'select',
                    { name: 'year', ref: 'year', onChange: this.onChange.bind(this) },
                    this.renderYearOptions()
                ),
                _react2['default'].createElement(_srcIndexJs.Error, { forName: this.props.name, form: this.props.form })
            );
        }
    }]);

    return BirthdateField;
})(_srcIndexJs.Field);

exports.BirthdateField = BirthdateField;

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../src/index.js":12}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _srcIndexJs = require('../src/index.js');

/**
 * This example shows the basic and also advance features of react-form-validation.
 */

var Child = (function (_React$Component) {
    _inherits(Child, _React$Component);

    function Child() {
        _classCallCheck(this, Child);

        _get(Object.getPrototypeOf(Child.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Child, [{
        key: 'render',

        /**
         * Renders the child form.
         */
        value: function render() {
            var form = this.props.form;
            return _react2['default'].createElement(
                'div',
                { className: 'fielset child' },
                _react2['default'].createElement(
                    'a',
                    { href: '#', className: 'remove', onClick: this.props.onClickRemove.bind(this, this) },
                    'X'
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'field' },
                    'Name: ',
                    _react2['default'].createElement(_srcIndexJs.Input, { name: 'name', type: 'text', form: form }),
                    _react2['default'].createElement(_srcIndexJs.Error, { forName: 'name', form: form })
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'field' },
                    'Password: ',
                    _react2['default'].createElement(_srcIndexJs.Input, { name: 'password', type: 'text', form: form }),
                    _react2['default'].createElement(_srcIndexJs.Error, { forName: 'password', form: form })
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'field' },
                    'Confirm Password: ',
                    _react2['default'].createElement(_srcIndexJs.Input, { name: 'confirmPassword', type: 'text', form: form }),
                    _react2['default'].createElement(_srcIndexJs.Error, { forName: 'confirmPassword', form: form })
                )
            );
        }
    }]);

    return Child;
})(_react2['default'].Component);

exports.Child = Child;

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../src/index.js":12}],3:[function(require,module,exports){
'use strict';

var _srcIndexJs = require('../src/index.js');

/**
 * Registers a rule for validating password.
 */
_srcIndexJs.Rules.register('customUsername', function () {
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
_srcIndexJs.Rules.register('minLikes', function (min) {
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

},{"../src/index.js":12}],4:[function(require,module,exports){
(function (global){

// render page
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _registrationJs = require('./registration.js');

_reactDom2['default'].render(React.createElement(_registrationJs.Registration, null), document.getElementById('registration-form'));

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./registration.js":5}],5:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _birthdateFieldJs = require('./birthdate-field.js');

require('./custom-rules.js');

var _childJs = require('./child.js');

var _srcIndexJs = require('../src/index.js');

/**
 * This example shows the basic and also advance features of react-form-validation.
 */

var Registration = (function (_React$Component) {
    _inherits(Registration, _React$Component);

    /**
     * Returns the initial state of our component.
     */

    function Registration(props) {
        _classCallCheck(this, Registration);

        _get(Object.getPrototypeOf(Registration.prototype), 'constructor', this).call(this, props);
        this.state = {
            form: this.createForm(),
            children: [1]
        };
    }

    /**
     * Called when the user clicks on the "Add" link.
     */

    _createClass(Registration, [{
        key: 'onClickAddChild',
        value: function onClickAddChild(event) {
            event.preventDefault();

            // add an extra child id in the list of children
            var children = this.state.children,
                last = children.length ? children[children.length - 1] : null;
            this.setState({
                children: children.concat(last ? last + 1 : 1)
            });
        }

        /**
         * Called when the user clicks on the remove link of a child
         */
    }, {
        key: 'onClickRemoveChild',
        value: function onClickRemoveChild(child) {
            event.preventDefault();

            var children = this.state.children,
                index = children.indexOf(child);
            this.setState({
                children: children.slice(0, index).concat(children.slice(index + 1))
            });
        }

        /**
         * Creates a form context that will be given to all fields of the page.
         * The form context manages the form state and its validation.
         */
    }, {
        key: 'createForm',
        value: function createForm() {
            return new _srcIndexJs.Context({
                fields: {
                    name: _srcIndexJs.Rules.required(),
                    // customUsername is a custom rule defined in custom-rules.js
                    username: _srcIndexJs.Rules.required().customUsername(),
                    email: _srcIndexJs.Rules.required().email(),
                    password: _srcIndexJs.Rules.required().password(),
                    confirmPassword: _srcIndexJs.Rules.equals('password'),
                    birthdate: _srcIndexJs.Rules.required().minAge(13),
                    likes: _srcIndexJs.Rules.custom(function (value, context) {
                        var type = context.getFieldValue('type');
                        if (type === 'male') {
                            // minLikes is a custom rule defined in custom-rules.js
                            return _srcIndexJs.Rules.minLikes(2);
                        } else if (type === 'female') {
                            return _srcIndexJs.Rules.minLikes(3);
                        }
                    }),
                    terms: _srcIndexJs.Rules.onlyIf(function (value, context) {
                        return context.getFieldValue('type') === 'male';
                    }).required('You have to agree to the terms and conditions'),
                    child: {
                        name: _srcIndexJs.Rules.required(),
                        password: _srcIndexJs.Rules.required().password(),
                        confirmPassword: _srcIndexJs.Rules.equals('password')
                    } /*,
                      childrenCount: {
                         virtual: true,
                         rules(data) {
                             console.log('data', data);
                         }
                      }*/
                }
            });
        }

        /**
         * Called when the form is submitted (either the user has pressed enter or clicked the
         * save button).
         */
    }, {
        key: 'onSubmit',
        value: function onSubmit(event, valid, data) {
            this.setState({
                data: data,
                valid: valid
            });
        }

        /**
         * Renders the child account fields.
         */
    }, {
        key: 'renderChildAccountFields',
        value: function renderChildAccountFields(form) {
            var ret = [],
                children = this.state.children;
            for (var i = 0; i < children.length; i++) {
                var prefix = 'child[' + i + ']';
                ret.push(_react2['default'].createElement(
                    'div',
                    { className: 'fielset child', key: children[i] },
                    _react2['default'].createElement(
                        'a',
                        { href: '#', className: 'remove',
                            onClick: this.onClickRemoveChild.bind(this, children[i]) },
                        'X'
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'field' },
                        'Name: ',
                        _react2['default'].createElement(_srcIndexJs.Input, { name: prefix + '.name', type: 'text' }),
                        _react2['default'].createElement(_srcIndexJs.Error, { forName: prefix + '.name' })
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'field' },
                        'Password: ',
                        _react2['default'].createElement(_srcIndexJs.Input, { name: prefix + '.password', type: 'text' }),
                        _react2['default'].createElement(_srcIndexJs.Error, { forName: prefix + '.password' })
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'field' },
                        'Confirm Password: ',
                        _react2['default'].createElement(_srcIndexJs.Input, { name: prefix + '.confirmPassword', type: 'text' }),
                        _react2['default'].createElement(_srcIndexJs.Error, { forName: prefix + '.confirmPassword' })
                    )
                ));
            }
            return ret;
        }

        /**
         * Returns the state of the form when submitted
         */
    }, {
        key: 'renderSubmittedState',
        value: function renderSubmittedState() {
            if (this.state.valid !== undefined) {
                return _react2['default'].createElement(
                    'div',
                    { className: 'form-data' },
                    'Valid: ',
                    this.state.valid.toString(),
                    _react2['default'].createElement('br', null),
                    'Data: ',
                    _react2['default'].createElement('br', null),
                    JSON.stringify(this.state.data, null, 4)
                );
            }
        }

        /**
         * Renders the form.
         */
    }, {
        key: 'render',
        value: function render() {
            var form = this.state.form;
            return _react2['default'].createElement(
                _srcIndexJs.Form,
                { form: form, onSubmit: this.onSubmit.bind(this) },
                _react2['default'].createElement(
                    'h1',
                    null,
                    'Registration Form Example'
                ),
                _react2['default'].createElement(_srcIndexJs.Input, { name: 'id', type: 'hidden', defaultValue: '123' }),
                _react2['default'].createElement(
                    'div',
                    { className: 'field' },
                    'Name: ',
                    _react2['default'].createElement(_srcIndexJs.Input, { name: 'name', type: 'text' }),
                    _react2['default'].createElement(_srcIndexJs.Error, { forName: 'name' })
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'field' },
                    'Username: ',
                    _react2['default'].createElement(_srcIndexJs.Input, { name: 'username', type: 'text', rules: _srcIndexJs.Rules.required() }),
                    _react2['default'].createElement(_srcIndexJs.Error, { forName: 'username' })
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'field' },
                    'Email: ',
                    _react2['default'].createElement(_srcIndexJs.Input, { name: 'email', type: 'text' }),
                    _react2['default'].createElement(_srcIndexJs.Error, { forName: 'email' })
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'field' },
                    'Password: ',
                    _react2['default'].createElement(_srcIndexJs.Input, { name: 'password', type: 'password' }),
                    _react2['default'].createElement(_srcIndexJs.Error, { forName: 'password' })
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'field' },
                    'Confirm Password: ',
                    _react2['default'].createElement(_srcIndexJs.Input, { name: 'confirmPassword', type: 'password' }),
                    _react2['default'].createElement(_srcIndexJs.Error, { forName: 'confirmPassword' })
                ),
                _react2['default'].createElement(_birthdateFieldJs.BirthdateField, { name: 'birthdate' }),
                _react2['default'].createElement(
                    'div',
                    { className: 'field' },
                    _react2['default'].createElement(
                        'label',
                        null,
                        _react2['default'].createElement(_srcIndexJs.Input, { name: 'type', type: 'radio', value: 'male' }),
                        ' Male'
                    ),
                    _react2['default'].createElement(
                        'label',
                        null,
                        _react2['default'].createElement(_srcIndexJs.Input, { name: 'type', type: 'radio', value: 'female' }),
                        ' Female'
                    ),
                    _react2['default'].createElement(_srcIndexJs.Error, { forName: 'type' })
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'field' },
                    'Likes:',
                    _react2['default'].createElement('br', null),
                    _react2['default'].createElement(
                        'label',
                        null,
                        _react2['default'].createElement(_srcIndexJs.Input, { name: 'likes', type: 'checkbox', value: 'movies' }),
                        ' Movies'
                    ),
                    _react2['default'].createElement('br', null),
                    _react2['default'].createElement(
                        'label',
                        null,
                        _react2['default'].createElement(_srcIndexJs.Input, { name: 'likes', type: 'checkbox', value: 'books' }),
                        ' Books'
                    ),
                    _react2['default'].createElement('br', null),
                    _react2['default'].createElement(
                        'label',
                        null,
                        _react2['default'].createElement(_srcIndexJs.Input, { name: 'likes', type: 'checkbox', value: 'sports' }),
                        ' Sports'
                    ),
                    _react2['default'].createElement('br', null),
                    _react2['default'].createElement(
                        'label',
                        null,
                        _react2['default'].createElement(_srcIndexJs.Input, { name: 'likes', type: 'checkbox', value: 'shows' }),
                        ' Shows'
                    ),
                    _react2['default'].createElement('br', null),
                    _react2['default'].createElement(_srcIndexJs.Error, { forName: 'likes' })
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'field' },
                    'Child accounts [ ',
                    _react2['default'].createElement(
                        'a',
                        { href: '#', onClick: this.onClickAddChild.bind(this) },
                        'Add'
                    ),
                    ' ]:',
                    _react2['default'].createElement('br', null),
                    this.renderChildAccountFields(form),
                    _react2['default'].createElement(_srcIndexJs.Error, { forName: 'childrenCount' })
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'field' },
                    _react2['default'].createElement(_srcIndexJs.Input, { name: 'terms', type: 'checkbox', value: 'accept' }),
                    'Accept Terms',
                    _react2['default'].createElement(_srcIndexJs.Error, { forName: 'terms' })
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'actions' },
                    _react2['default'].createElement(
                        'button',
                        { type: 'submit' },
                        'Register'
                    )
                ),
                this.renderSubmittedState()
            );
        }
    }]);

    return Registration;
})(_react2['default'].Component);

exports.Registration = Registration;

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../src/index.js":12,"./birthdate-field.js":1,"./child.js":2,"./custom-rules.js":3}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _fieldStateJs = require('./field-state.js');

var _rulesJs = require('./rules.js');

var _validationContextJs = require('./validation-context.js');

/**
 * Context class.
 * Manages the state of all the components.
 */

var Context = (function () {
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
                    if (config[key] instanceof _rulesJs.Rules) {
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
            this.fields.push(new _fieldStateJs.FieldState(component, { validated: false }));
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
            var ret = {};

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
                var result = rules.validate(state.value, new _validationContextJs.ValidationContext(data, field));
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
})();

exports.Context = Context;

},{"./field-state.js":8,"./rules.js":14,"./validation-context.js":17}],7:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _utilsJs = require('./utils.js');

var Error = (function (_React$Component) {
    _inherits(Error, _React$Component);

    /**
     * Constructor.
     */

    function Error(props, context) {
        _classCallCheck(this, Error);

        _get(Object.getPrototypeOf(Error.prototype), 'constructor', this).call(this, props, context);
        this.state = this.getFieldState();
    }

    /**
     * Properties type.
     */

    /**
     * Called when the component is going to be mounted.
     */

    _createClass(Error, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var form = _utilsJs.Utils.getForm(this);
            if (form) {
                form.addListener(this);
            }
        }

        /**
         * Called when the component is going to unmount.
         */
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var form = _utilsJs.Utils.getForm(this);
            if (form) {
                form.removeListener(this);
            }
        }

        /**
         * Called by the listener mixin when the form is validated.
         */
    }, {
        key: 'formDidValidate',
        value: function formDidValidate(result) {
            this.setState(this.getFieldState());
        }
    }, {
        key: 'getFieldState',
        value: function getFieldState() {
            var form = _utilsJs.Utils.getForm(this),
                fieldState = form.getFieldStateByName(this.props.forName);
            return {
                error: fieldState ? fieldState.error : undefined,
                valid: fieldState ? fieldState.valid : undefined
            };
        }

        /**
         * Renders the input.
         */
    }, {
        key: 'render',
        value: function render() {
            if (this.state.valid === false) {
                return _react2['default'].createElement(
                    'label',
                    _extends({ className: 'error' }, this.props, { form: null }),
                    this.state.error
                );
            } else {
                return null;
            }
        }
    }]);

    return Error;
})(_react2['default'].Component);

exports.Error = Error;
Error.propTypes = {
    form: _react2['default'].PropTypes.any,
    forName: _react2['default'].PropTypes.string.isRequired
};

/**
 * Context types.
 */
Error.contextTypes = {
    form: _react2['default'].PropTypes.any
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./utils.js":16}],8:[function(require,module,exports){
'use strict';

/**
 * Field class.
 * Represents a field stored in the form context.
 */
Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FieldState = (function () {
    function FieldState(component, state) {
        _classCallCheck(this, FieldState);

        this.component = component;
        this.state = state;
    }

    /**
     * Returns the name of this field.
     */

    _createClass(FieldState, [{
        key: 'getName',
        value: function getName() {
            return this.component.props.name;
        }

        /**
         * Returns the component.
         */
    }, {
        key: 'getComponent',
        value: function getComponent() {
            return this.component;
        }

        /**
         * Returns the rules specified on the component.
         */
    }, {
        key: 'getRules',
        value: function getRules() {
            return this.component.props.rules;
        }

        /**
         * Returns a field's state.
         */
    }, {
        key: 'getState',
        value: function getState() {
            return this.state;
        }
    }]);

    return FieldState;
})();

exports.FieldState = FieldState;

},{}],9:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _utilsJs = require('./utils.js');

/**
 * This Field class registers the component as a field in the parent form.
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

var Field = (function (_React$Component) {
    _inherits(Field, _React$Component);

    function Field() {
        _classCallCheck(this, Field);

        _get(Object.getPrototypeOf(Field.prototype), 'constructor', this).apply(this, arguments);
    }

    /**
     * Context types.
     */

    _createClass(Field, [{
        key: 'componentWillMount',

        /**
         * When the component will mount register it in the form.
         */
        value: function componentWillMount() {
            var form = _utilsJs.Utils.getForm(this);
            if (form) {
                form.register(this);
            }
        }

        /**
         * When the component is removed, unregister it from the form.
         */
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var form = _utilsJs.Utils.getForm(this);
            if (form) {
                form.unregister(this);
            }
        }

        /**
         * Can be called to tell the form that the component's value has changed.
         */
    }, {
        key: 'validateField',
        value: function validateField(force) {
            var form = _utilsJs.Utils.getForm(this);
            if (form) {
                form.validate(this, force);
            }
        }
    }]);

    return Field;
})(_react2['default'].Component);

exports.Field = Field;
Field.contextTypes = {
    form: _react2['default'].PropTypes.any
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./utils.js":16}],10:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

/**
 * Form component.
 */

var Form = (function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form() {
        _classCallCheck(this, Form);

        _get(Object.getPrototypeOf(Form.prototype), 'constructor', this).apply(this, arguments);
    }

    /**
     * Context types.
     */

    _createClass(Form, [{
        key: 'onSubmit',

        /**
         * Called when the form is submitted.
         */
        value: function onSubmit(event) {
            // validate form, then call callback
            var result = this.props.form.validate(undefined, true);
            if (this.props.onSubmit) {
                this.props.onSubmit(event, result.valid, result.data, this.props.form);
            }

            // prevent form submission if not valid
            if (!result.valid) {
                event.preventDefault();
            }

            // scroll to error
            if (this.props.scrollToError) {
                // TODO: find first error then .scrollIntoView();
            }
        }

        /**
         * Returns the form context.
         */
    }, {
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                form: this.props.form
            };
        }

        /**
         * Renders the component.
         */
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'form',
                _extends({}, this.props, { noValidate: true, onSubmit: this.onSubmit.bind(this) }),
                this.props.children
            );
        }
    }]);

    return Form;
})(_react2['default'].Component);

exports.Form = Form;
Form.childContextTypes = {
    form: _react2['default'].PropTypes.any
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],11:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _utilsJs = require('./utils.js');

var Hint = (function (_React$Component) {
    _inherits(Hint, _React$Component);

    /**
     * Constructor
     */

    function Hint(props, context) {
        _classCallCheck(this, Hint);

        _get(Object.getPrototypeOf(Hint.prototype), 'constructor', this).call(this, props, context);
        var form = _utilsJs.Utils.getForm(this);
        this.state = {
            state: form.getFieldStateByName(this.props.forName),
            display: this.parseDisplayString(this.props.display)
        };
    }

    /**
     * Properties type.
     */

    /**
     * Called when the component is going to be mounted.
     */

    _createClass(Hint, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var form = _utilsJs.Utils.getForm(this);
            if (form) {
                form.addListener(this);
            }
        }

        /**
         * Called when the component is going to unmount.
         */
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var form = _utilsJs.Utils.getForm(this);
            if (form) {
                form.removeListener(this);
            }
        }

        /**
         * Called when the component's props have changed.
         */
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            if (newProps.display !== this.props.display) {
                this.setState({
                    display: this.parseDisplayString(newProps.display)
                });
            }
        }

        /**
         * Converts the display property to an object.
         */
    }, {
        key: 'parseDisplayString',
        value: function parseDisplayString(display) {
            var ret = {};
            (display || '').split(/[\|,]/).forEach(function (item) {
                ret[item] = true;
            });
            return ret;
        }

        /**
         * Called by the listener mixin when the form is validated.
         */
    }, {
        key: 'formDidValidate',
        value: function formDidValidate(result) {
            var form = _utilsJs.Utils.getForm(this);
            this.setState({
                state: form.getFieldStateByName(this.props.forName)
            });
        }

        /**
         * Renders the input.
         */
    }, {
        key: 'render',
        value: function render() {
            var display = this.state.display,
                state = this.state.state;
            if (display.error && state.valid === false || display.pristine && state.validated !== true || display.valid && state.valid === true) {
                return _react2['default'].createElement(
                    'label',
                    _extends({ className: 'hint' }, this.props, { form: null }),
                    this.props.text || this.props.children
                );
            } else {
                return null;
            }
        }
    }]);

    return Hint;
})(_react2['default'].Component);

exports.Hint = Hint;
Hint.propTypes = {
    display: _react2['default'].PropTypes.string,
    text: _react2['default'].PropTypes.string,
    form: _react2['default'].PropTypes.any,
    forName: _react2['default'].PropTypes.string.isRequired
};

/**
 * The default props.
 */
Hint.defaultProps = {
    display: 'pristine|valid'
};

/**
 * Context types.
 */
Hint.contextTypes = {
    form: _react2['default'].PropTypes.any
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./utils.js":16}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _errorJs = require('./error.js');

Object.defineProperty(exports, 'Error', {
  enumerable: true,
  get: function get() {
    return _errorJs.Error;
  }
});

var _fieldJs = require('./field.js');

Object.defineProperty(exports, 'Field', {
  enumerable: true,
  get: function get() {
    return _fieldJs.Field;
  }
});

var _formJs = require('./form.js');

Object.defineProperty(exports, 'Form', {
  enumerable: true,
  get: function get() {
    return _formJs.Form;
  }
});

var _hintJs = require('./hint.js');

Object.defineProperty(exports, 'Hint', {
  enumerable: true,
  get: function get() {
    return _hintJs.Hint;
  }
});

var _inputJs = require('./input.js');

Object.defineProperty(exports, 'Input', {
  enumerable: true,
  get: function get() {
    return _inputJs.Input;
  }
});

var _contextJs = require('./context.js');

Object.defineProperty(exports, 'Context', {
  enumerable: true,
  get: function get() {
    return _contextJs.Context;
  }
});

var _rulesJs = require('./rules.js');

Object.defineProperty(exports, 'Rules', {
  enumerable: true,
  get: function get() {
    return _rulesJs.Rules;
  }
});

var _selectJs = require('./select.js');

Object.defineProperty(exports, 'Select', {
  enumerable: true,
  get: function get() {
    return _selectJs.Select;
  }
});

var _utilsJs = require('./utils.js');

Object.defineProperty(exports, 'Utils', {
  enumerable: true,
  get: function get() {
    return _utilsJs.Utils;
  }
});

},{"./context.js":6,"./error.js":7,"./field.js":9,"./form.js":10,"./hint.js":11,"./input.js":13,"./rules.js":14,"./select.js":15,"./utils.js":16}],13:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _fieldJs = require('./field.js');

var _utilsJs = require('./utils.js');

var Input = (function (_Field) {
    _inherits(Input, _Field);

    function Input() {
        _classCallCheck(this, Input);

        _get(Object.getPrototypeOf(Input.prototype), 'constructor', this).apply(this, arguments);
    }

    /**
     * Properties type.
     */

    _createClass(Input, [{
        key: 'componentWillMount',

        /**
         * Called when the component is going to be mounted.
         */
        value: function componentWillMount() {
            _get(Object.getPrototypeOf(Input.prototype), 'componentWillMount', this).call(this);

            var form = _utilsJs.Utils.getForm(this);
            if (form) {
                form.addListener(this);
            }
        }

        /**
         * Called when the component is going to unmount.
         */
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _get(Object.getPrototypeOf(Input.prototype), 'componentWillUnmount', this).call(this);

            var form = _utilsJs.Utils.getForm(this);
            if (form) {
                form.removeListener(this);
            }
        }

        /**
         * Called to check if the field is checked.
         */
    }, {
        key: 'isChecked',
        value: function isChecked() {
            var type = this.props.type;
            if (type === 'checkbox' || type === 'radio') {
                var element = _reactDom2['default'].findDOMNode(this);
                return element.checked;
            }
        }

        /**
         * Called to check if the field is a list.
         */
    }, {
        key: 'isList',
        value: function isList() {
            var type = this.props.type;
            return type === 'checkbox';
        }

        /**
         * Returns the value of the input.
         */
    }, {
        key: 'getValue',
        value: function getValue() {
            var element = _reactDom2['default'].findDOMNode(this);
            return element.value;
        }

        /**
         * Called when the value of the input has changed.
         */
    }, {
        key: 'onChange',
        value: function onChange(event) {
            _get(Object.getPrototypeOf(Input.prototype), 'validateField', this).call(this);

            // call parent prop
            if (this.props.onChange) {
                this.props.onChange(event);
            }
        }

        /**
         * Called when the field looses focus.
         * This forces validation of the field.
         */
    }, {
        key: 'onBlur',
        value: function onBlur() {
            _get(Object.getPrototypeOf(Input.prototype), 'validateField', this).call(this, true);

            // call parent prop
            if (this.props.onBlur) {
                this.props.onBlur(event);
            }
        }

        /**
         * Called by the listener mixin after the form is validated.
         */
    }, {
        key: 'formDidValidate',
        value: function formDidValidate() {}
        // TODO: implement getting the field state

        /**
         * Returns the component's className.
         */

    }, {
        key: 'className',
        value: function className(fieldState) {
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
        }

        /**
         * Renders the input.
         */
    }, {
        key: 'render',
        value: function render() {
            var form = _utilsJs.Utils.getForm(this),
                fieldState = form.getFieldState(this);

            return _react2['default'].createElement('input', _extends({}, this.props, { className: this.className(fieldState),
                onChange: this.onChange.bind(this), onBlur: this.onBlur.bind(this), form: null }));
        }
    }]);

    return Input;
})(_fieldJs.Field);

exports.Input = Input;
Input.propTypes = {
    name: _react2['default'].PropTypes.string.isRequired
};

/**
 * Context types.
 */
Input.contextTypes = {
    form: _react2['default'].PropTypes.any
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./field.js":9,"./utils.js":16}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var EMAIL_REGEXP = new RegExp('^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]' + '{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$');

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
Rules.register('email', function (message) {
    return {
        check: function check(value) {
            return EMAIL_REGEXP.test(value);
        },
        message: message || 'This is not a valid email address'
    };
});

/**
 * Registers a rule for validating an integer.
 */
Rules.register('integer', function (message) {
    return {
        check: function check(value) {
            return (/^[0-9]+$/.test(value)
            );
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
Rules.register('equals', function (otherFieldName, message) {
    return {
        check: function check(value, context) {
            return context.getFieldValue(otherFieldName) === value;
        },
        message: message || 'This field does not match ' + otherFieldName
    };
});

/**
 * Registers a rule for validating password.
 */
Rules.register('password', function (messages) {
    messages = messages || {};
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
            length: messages.length || 'Password should be at least 8 characters',
            upper: messages.upper || 'Password should contain at least one uppercase letter',
            lower: messages.lower || 'Password should contain at least one lowercase letter',
            num: messages.num || 'Password should contain at least one number'
        }
    };
});

/**
 * Registers a rule for validating minimum age.
 */
Rules.register('minAge', function (minAge, message) {
    return {
        check: function check(value) {
            var diff = new Date(Date.now() - value.getTime()),
                age = Math.abs(diff.getUTCFullYear() - 1970);
            return age >= minAge;
        },
        message: message || 'You must be at least ' + minAge + ' years old.'
    };
});

exports.Rules = Rules;

},{}],15:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _fieldJs = require('./field.js');

var _utilsJs = require('./utils.js');

var Select = (function (_Field) {
    _inherits(Select, _Field);

    function Select() {
        _classCallCheck(this, Select);

        _get(Object.getPrototypeOf(Select.prototype), 'constructor', this).apply(this, arguments);
    }

    /**
     * Properties type.
     */

    _createClass(Select, [{
        key: 'getValue',

        /**
         * Returns the value of the input.
         */
        value: function getValue() {
            var element = _reactDom2['default'].findDOMNode(this);
            return element.value;
        }

        /**
         * Called when the value of the input has changed.
         */
    }, {
        key: 'onChange',
        value: function onChange() {
            _get(Object.getPrototypeOf(Select.prototype), 'validateField', this).call(this, true);
        }

        /**
         * Returns the component's className.
         */
    }, {
        key: 'rootClassName',
        value: function rootClassName(fieldState) {
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
        }

        /**
         * Renders the select.
         */
    }, {
        key: 'render',
        value: function render() {
            var form = _utilsJs.Utils.getForm(this),
                fieldState = form.getFieldState(this);

            return _react2['default'].createElement(
                'select',
                _extends({}, this.props, { className: this.rootClassName(fieldState),
                    onChange: this.onChange.bind(this), onBlur: this.onBlur.bind(this) }),
                this.props.children
            );
        }
    }]);

    return Select;
})(_fieldJs.Field);

exports.Select = Select;
Select.propTypes = {
    form: _react2['default'].PropTypes.any,
    name: _react2['default'].PropTypes.string.isRequired
};

/**
 * Context types.
 */
Select.contextTypes = {
    form: _react2['default'].PropTypes.any
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./field.js":9,"./utils.js":16}],16:[function(require,module,exports){
'use strict';

/**
 * Utils class.
 * A bunch of reusable static functions.
 */
Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Utils = (function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
        key: 'getForm',

        /**
         * Retrieves the form for a component.
         * The form can be given either using props or context.
         */
        value: function getForm(component) {
            if (component.props && component.props.form) {
                return component.props.form;
            } else if (component.context && component.context.form) {
                return component.context.form;
            } else {
                console.error('Could not find form context. The component might not be in a <Form> ' + 'or might have a wrong form property', component);
            }
        }
    }]);

    return Utils;
})();

exports.Utils = Utils;

},{}],17:[function(require,module,exports){
'use strict';

/**
 * ValidationContext class.
 * Simplifies access to data during validation.
 */
Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ValidationContext = (function () {
    function ValidationContext(data, field) {
        _classCallCheck(this, ValidationContext);

        this.data = data;
        this.field = field;
    }

    /**
     * Returns the value a field from its name.
     * It searches the closest field with the given name.
     */

    _createClass(ValidationContext, [{
        key: 'getFieldValue',
        value: function getFieldValue(name) {
            var fieldName = this.field.getName(),
                parts = fieldName.split('.');

            while (parts.length > 0) {
                parts.pop();

                var newName = parts.concat(name).join('.');
                if (this.data[newName]) {
                    return this.data[newName].value;
                }
            }
        }

        /**
         * Returns the raw data from the form.
         */
    }, {
        key: 'getData',
        value: function getData() {
            return this.data;
        }
    }]);

    return ValidationContext;
})();

exports.ValidationContext = ValidationContext;

},{}]},{},[4])