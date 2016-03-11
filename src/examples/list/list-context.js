
new Context({
    fields: {
        // this is an array
        friend: {
            name: Rules.required(),
            age: Rules.optional().integer()
        }
    }
});
