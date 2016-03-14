'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Field = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Field = exports.Field = function (_React$Component) {
    _inherits(Field, _React$Component);

    function Field() {
        _classCallCheck(this, Field);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Field).apply(this, arguments));
    }

    _createClass(Field, [{
        key: 'componentWillMount',

        /**
         * When the component will mount register it in the form.
         */
        value: function componentWillMount() {
            var form = _utils.Utils.getForm(this);
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
            var form = _utils.Utils.getForm(this);
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
            var form = _utils.Utils.getForm(this);
            if (form) {
                form.validate(this, force);
            }
        }
    }]);

    return Field;
}(_react2.default.Component);

/**
 * Context types.
 */


Field.contextTypes = {
    form: _react2.default.PropTypes.any
};