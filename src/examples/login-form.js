
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
    /**
     * Returns the initial state of the component.
     */
    getInitialState: function() {
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
    render: function() {
        var form = this.state.form;
        return (
            <Form form={form} onSubmit={this.props.formSubmitted}>
                <h4>Login</h4>
                <div className="field">
                    Email: <Input type="text" name="email" form={form} />
                    <Error forName="email" form={form} />
                </div>
                <div className="field">
                    Password: <Input type="password" name="password" form={form} />
                    <Error forName="password" form={form} />
                </div>
                <div className="actions">
                    <button>Login</button>
                </div>
            </Form>
        );
    }
});
