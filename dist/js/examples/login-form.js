"use strict";

var ReactFormValidation = require('react-form-validation'),
    Instance = ReactFormValidation.Instance,
    Error = ReactFormValidation.Error,
    Rules = ReactFormValidation.Rules,
    Form = ReactFormValidation.Form,
    Input = ReactFormValidation.Input;

/**
 * Simple login form.
 */
module.exports = React.createClass({
    displayName: "exports",

    /**
     * Returns the initial state of the component.
     */
    getInitialState: function getInitialState() {
        return {
            form: new Instance({
                fields: {
                    email: Rules.required().email(),
                    password: Rules.required()
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
                "h4",
                null,
                "Login"
            ),
            React.createElement(
                "div",
                { className: "field" },
                "Email: ",
                React.createElement(Input, { type: "text", name: "email", form: form }),
                React.createElement(Error, { forName: "email", form: form })
            ),
            React.createElement(
                "div",
                { className: "field" },
                "Password: ",
                React.createElement(Input, { type: "password", name: "password", form: form }),
                React.createElement(Error, { forName: "password", form: form })
            ),
            React.createElement(
                "div",
                { className: "actions" },
                React.createElement(
                    "button",
                    null,
                    "Login"
                )
            )
        );
    }
});