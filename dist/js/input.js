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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

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