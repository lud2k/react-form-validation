'use strict';

/**
 * Field class.
 * Represents a field stored in the form context.
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FieldState = exports.FieldState = function () {
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
}();