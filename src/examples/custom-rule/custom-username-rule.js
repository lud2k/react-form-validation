
import { Rules } from 'react-form-validation';

/**
 * Registers a custom rule for validating usernames.
 * the rules will be accessible form Rules.{ruleName}.
 */
Rules.register('customUsernameRule', function() {
    return {
        check: function check(value) {
            if (!/^[a-z0-9]+$/.test(value)) {
                return 'letters';
            }
            if (!value || value.length < 5) {
                return 'length';
            }
            if (!/[0-9]+$/.test(value)) {
                return 'syntax';
            }
            return true;
        },
        messages: {
            letters: 'Username should only contain lower case characters or numbers',
            length: 'Username should be at least 5 characters',
            syntax: 'Username should end with numbers'
        }
    };
});
