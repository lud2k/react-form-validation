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
                fieldState = form.getFieldStateByName(this.props.htmlFor);
            return {
                error: fieldState ? fieldState.error : undefined,
                valid: fieldState ? fieldState.valid : undefined
            };
        }

        /**
         * Returns the htmlFor attribute.
         */
    }, {
        key: 'htmlForAttribute',
        value: function htmlForAttribute() {
            return this.props.htmlFor + '-field';
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
                    _extends({ className: 'error' }, this.props, {
                        htmlFor: this.htmlForAttribute(),
                        context: null }),
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
    context: _react2['default'].PropTypes.any,
    htmlFor: _react2['default'].PropTypes.string.isRequired
};

/**
 * Context types.
 */
Error.contextTypes = {
    form: _react2['default'].PropTypes.any
};