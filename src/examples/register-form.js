
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
    /**
     * Returns the initial state of the component.
     */
    getInitialState: function() {
        return {
            form: new Instance({
                fields: {
                    username: Rules.required().regex(/^[a-z0-9_]+$/,
                        'Should only contain letters, numbers and _.'),
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
    render: function() {
        var form = this.state.form;
        return (
            <Form form={form} onSubmit={this.props.formSubmitted}>
                <h4>Register</h4>
                <div className="field">
                    Username: <Input type="text" name="username" form={form} />
                    <Error forName="username" form={form} />
                    <Hint forName="username" form={form}
                        text="Only letters, numbers or _ is allowed" />
                </div>
                <div className="field">
                    Email: <Input type="text" name="email" form={form} />
                    <Error forName="email" form={form} />
                </div>
                <div className="field">
                    Password: <Input type="password" name="password" form={form} />
                    <Error forName="password" form={form} />
                    <Hint forName="password" form={form}
                        text="At least 8 characters, one uppercase, one lowercase and one number" />
                </div>
                <div className="field">
                    Confirm Password: <Input type="password" name="confirmPassword" form={form} />
                    <Error forName="confirmPassword" form={form} />
                </div>
                <div className="actions">
                    <button>Register</button>
                </div>
            </Form>
        );
    }
});
