'use strict';

/**
 * ValidationContext class.
 * Simplifies access to data during validation.
 */
var ValidationContext = function(data, field) {
    this.data = data;
    this.field = field;
};

/**
 * Returns the value a field from its name.
 * It searches the closest field with the given name.
 */
ValidationContext.prototype.getFieldValue = function(name) {
    var fieldPath = this.field.getPath(),
        possibleFullName = fieldPath ? fieldPath + '.' + name : name;

    while (true) {
        if (this.data[possibleFullName]) {
            return this.data[possibleFullName].value;
        } else {
            if (possibleFullName.indexOf('.') !== -1) {
                var parts = /(.*\.)([^.]+\.)([^\.]+)$/.exec(possibleFullName);
                possibleFullName = parts[1] ? parts[1] + parts[3] : parts[3];
            } else {
                break;
            }
        }
    }
};

/**
 * Returns the raw data from the form.
 */
ValidationContext.prototype.getData = function() {
    return this.data;
};

module.exports = ValidationContext;
