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
            state: form.getFieldStateByName(this.props.htmlFor),
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
                state: form.getFieldStateByName(this.props.htmlFor)
            });
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
            var display = this.state.display,
                state = this.state.state;
            if (display.error && state.valid === false || display.pristine && state.validated !== true || display.valid && state.valid === true) {
                return _react2['default'].createElement(
                    'label',
                    _extends({ className: 'hint' }, this.props, {
                        htmlFor: this.htmlForAttribute(),
                        context: null }),
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
    context: _react2['default'].PropTypes.any,
    htmlFor: _react2['default'].PropTypes.string.isRequired
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