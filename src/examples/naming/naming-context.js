
new Context({
    fields: {
        home: {
            address: Rules.required()
        },
        work: {
            address: Rules.optional()
        }
    }
});
