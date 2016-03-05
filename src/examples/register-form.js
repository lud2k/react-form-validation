
import React from 'react';
import { Context, Error, Hint, Rules, Form, Input } from 'react-form-validation';

/**
 * Registration form.
 */
export default class RegisterForm extends React.Component {
    /**
     * Constructor.
     */
    constructor(props) {
        super(props);

        this.state = {
            form: new Context({
                fields: {
                    username: Rules.required().regex(/^[a-z0-9_]+$/,
                        'Should only contain letters, numbers and _.'),
                    email: Rules.required().email(),
                    password: Rules.required().password(),
                    confirmPassword: Rules.equals('password')
                }
            })
        };
    }

    /**
     * Renders the form.
     */
    render() {
        return (
            <Form form={this.state.form} onSubmit={this.props.formSubmitted}>
                <h4>Register</h4>
                <div className="field">
                    Username: <Input type="text" name="username" />
                    <Error forName="username" />
                    <Hint forName="username"
                        text="Only letters, numbers or _ is allowed" />
                </div>
                <div className="field">
                    Email: <Input type="text" name="email" />
                    <Error forName="email" />
                </div>
                <div className="field">
                    Password: <Input type="password" name="password" />
                    <Error forName="password" />
                    <Hint forName="password"
                        text="At least 8 characters, one uppercase, one lowercase and one number" />
                </div>
                <div className="field">
                    Confirm Password: <Input type="password" name="confirmPassword" />
                    <Error forName="confirmPassword" />
                </div>
                <div className="actions">
                    <button>Register</button>
                </div>
            </Form>
        );
    }
}
