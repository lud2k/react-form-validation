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