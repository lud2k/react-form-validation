'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Form = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Form component.
 */

var Form = exports.Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Form).apply(this, arguments));
    }

    _createClass(Form, [{
        key: 'onSubmit',

        /**
         * Called when the form is submitted.
         */
        value: function onSubmit(event) {
            // validate form, then call callback
            var result = this.props.context.validate(undefined, true);
            if (this.props.onSubmit) {
                this.props.onSubmit(event, result.valid, result.data, this.props.context);
            }

            // prevent form submission if not valid
            if (!result.valid || this.props.preventSubmit) {
                event.preventDefault();
            }

            // scroll to error
            if (this.props.scrollToError !== false) {
                _utils.Utils.scrollToFirstError(this.refs.form, this.props.scrollToErrorPadding || 20);
            }
        }

        /**
         * Returns the form context.
         */

    }, {
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                form: this.props.context
            };
        }

        /**
         * Renders the component.
         */

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'form',
                _extends({}, this.props, { noValidate: true, context: null, ref: 'form',
                    onSubmit: this.onSubmit.bind(this) }),
                this.props.children
            );
        }
    }]);

    return Form;
}(_react2.default.Component);

/**
 * Properties type.
 */


Form.propTypes = {
    context: _react2.default.PropTypes.any.required,
    preventSubmit: _react2.default.PropTypes.bool
};

/**
 * Context types.
 */
Form.childContextTypes = {
    form: _react2.default.PropTypes.any
};