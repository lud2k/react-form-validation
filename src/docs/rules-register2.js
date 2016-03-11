
Rules.register('myCustomUsernameRule', function(message) {
    return {
        check: function check(value) {
            return /^[a-z0-9]+$/.test(value);
        },
        // user defined message
        message: message,
        // default messages
        defaultMessage: 'Username should only contain lower case characters or numbers'
    };
});
