
new Context({
    fields: {
        name: Rules.required(),
        home: {
            address: Rules.required(),
            phone: Rules.required()
        },
        work: {
            address: Rules.required(),
            phone: Rules.required()
        }
    }
});
