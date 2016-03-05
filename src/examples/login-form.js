
import React from 'react';
import { Context, Error, Rules, Form, Input } from 'react-form-validation';

/**
 * Simple login form.
 */
export default class LoginForm extends React.Component {
    /**
     * Constructor.
     */
    constructor(props) {
        super(props);

        this.state = {
            form: new Context({
                fields: {
                    email: Rules.required().email(),
                    password: Rules.required()
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
                <h4>Login</h4>
                <div className="field">
                    Email: <Input type="text" name="email" />
                    <Error forName="email" />
                </div>
                <div className="field">
                    Password: <Input type="password" name="password" />
                    <Error forName="password" />
                </div>
                <div className="actions">
                    <button>Login</button>
                </div>
            </Form>
        );
    }
}
