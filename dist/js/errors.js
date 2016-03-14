'use strict';

/**
 * An error that can be thrown by a Field if the value of the field is invalid.
 * This can be used in the rules to show errors.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FieldValueError =
/**
 * Constructor.
 *
 * @param code (string) a summary of the error as code.
 * @param error (any) some additional data that can be useful in validation.
 */
exports.FieldValueError = function FieldValueError(code, error) {
  _classCallCheck(this, FieldValueError);

  this.code = code;
  this.error = error;
};

/**
 * An error that can be thrown by a Rule when rule execution should stop.
 * The field is marked as valid even if a later rule would have failed.
 */


var OptionalRuleError =
/**
 * Constructor.
 *
 * @param code (string) a summary of the error as code.
 * @param error (any) some additional data that can be useful in validation.
 */
exports.OptionalRuleError = function OptionalRuleError(code, error) {
  _classCallCheck(this, OptionalRuleError);

  this.code = code;
  this.error = error;
};