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