
var Form = require('../src/form.js'),
    Rules = Form.Rules;

/**
 * Registers a rule for validating password.
 */
Rules.register('customUsername', function() {
    return {
        check: function check(value) {
            if (!value || value.length < 5) {
                return 'length';
            }
            if (!/[0-9]+$/.test(value)) {
                return 'syntax';
            }
            return true;
        },
        messages: {
            length: 'Username should be at least 5 characters',
            syntax: 'Username should end with numbers'
        }
    };
});

/**
 * Registers a rule for validating password.
 */
Rules.register('minLikes', function(min) {
    return {
        check: function check(value) {
            if (!value || value.length < min) {
                return false;
            }
            return true;
        },
        message: 'You have to pick at least ' + min + ' likes'
    };
});
