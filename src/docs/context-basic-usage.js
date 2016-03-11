
new Context({
    fields: {
        username: Rules.required().regex(/^[a-z0-9_]+$/,
            'Should only contain letters, numbers and _.'),
        email: Rules.required().email(),
        password: Rules.required().password(),
        confirmPassword: Rules.equals('password'),
        birthDate: Rules.required().noError(),
        terms: Rules.required('You have to accept the terms of service')
    }
});
