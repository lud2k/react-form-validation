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