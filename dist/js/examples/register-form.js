'use strict';

var ReactFormValidation = require('react-form-validation'),
    Instance = ReactFormValidation.Instance,
    Error = ReactFormValidation.Error,
    Hint = ReactFormValidation.Hint,
    Rules = ReactFormValidation.Rules,
    Form = ReactFormValidation.Form,
    Input = ReactFormValidation.Input;

/**
 * Simple login form.
 */
module.exports = React.createClass({
    displayName: 'exports',

    /**
     * Returns the initial state of the component.
     */
    getInitialState: function getInitialState() {
        return {
            form: new Instance({
                fields: {
                    username: Rules.required().regex(/^[a-z0-9_]+$/, 'Should only contain letters, numbers and _.'),
                    email: Rules.required().email(),
                    password: Rules.required().password(),
                    confirmPassword: Rules.equals('password')
                }
            })
        };
    },

    /**
     * Renders the form.
     */
    render: function render() {
        var form = this.state.form;
        return React.createElement(
            Form,
            { form: form },
            React.createElement(
                'h4',
                null,
                'Register'
            ),
            React.createElement(
                'div',
                { className: 'field' },
                'Username: ',
                React.createElement(Input, { type: 'text', name: 'username', form: form }),
                React.createElement(Error, { forName: 'username', form: form }),
                React.createElement(Hint, { forName: 'username', form: form,
                    text: 'Only letters, numbers or _ is allowed' })
            ),
            React.createElement(
                'div',
                { className: 'field' },
                'Email: ',
                React.createElement(Input, { type: 'text', name: 'email', form: form }),
                React.createElement(Error, { forName: 'email', form: form })
            ),
            React.createElement(
                'div',
                { className: 'field' },
                'Password: ',
                React.createElement(Input, { type: 'password', name: 'password', form: form }),
                React.createElement(Error, { forName: 'password', form: form }),
                React.createElement(Hint, { forName: 'password', form: form,
                    text: 'At least 8 characters, one uppercase, one lowercase and one number' })
            ),
            React.createElement(
                'div',
                { className: 'field' },
                'Confirm Password: ',
                React.createElement(Input, { type: 'password', name: 'confirmPassword', form: form }),
                React.createElement(Error, { forName: 'confirmPassword', form: form })
            ),
            React.createElement(
                'div',
                { className: 'actions' },
                React.createElement(
                    'button',
                    null,
                    'Register'
                )
            )
        );
    }
});