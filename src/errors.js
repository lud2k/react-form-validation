'use strict';

/**
 * An error that can be thrown by a Field if the value of the field is invalid.
 * This can be used in the rules to show errors.
 */
export class FieldValueError {
    /**
     * Constructor.
     *
     * @param code (string) a summary of the error as code.
     * @param error (any) some additional data that can be useful in validation.
     */
    constructor(code, error) {
        this.code = code;
        this.error = error;
    }
}

/**
 * An error that can be thrown by a Rule when rule execution should stop.
 * The field is marked as valid even if a later rule would have failed.
 */
export class OptionalRuleError {
    /**
     * Constructor.
     *
     * @param code (string) a summary of the error as code.
     * @param error (any) some additional data that can be useful in validation.
     */
    constructor(code, error) {
        this.code = code;
        this.error = error;
    }
}
