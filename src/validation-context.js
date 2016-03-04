'use strict';

/**
 * ValidationContext class.
 * Simplifies access to data during validation.
 */
export class ValidationContext {
    constructor(data, field) {
        this.data = data;
        this.field = field;
    }

    /**
     * Returns the value a field from its name.
     * It searches the closest field with the given name.
     */
    getFieldValue(name) {
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
    getData() {
        return this.data;
    }
}
