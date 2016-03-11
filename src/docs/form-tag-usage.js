
import React from 'react';
import { Context, Error, Rules, Form, Input } from 'react-form-validation';

/**
 * A component.
 */
export default class LoginForm extends React.Component {
    /**
     * Constructor.
     */
    constructor(props) {
        super(props);

        // create a form context and save it in the state.
        this.state = {
            context: new Context({
                fields: {
                    email: Rules.required().email(),
                    password: Rules.required()
                }
            })
        };
    }

    /**
     * Called when the user submits the form.
     */
    onSubmit(event, valid, data, form) {
        // do something with the form data.
    }

    /**
     * Renders the form.
     */
    render() {
        return (
            <Form context={this.state.context} onSubmit={this.onSubmit.bind(this)}>
                <h4>Login</h4>
                <div className="field">
                    Email: <Input type="text" name="email" />
                    <Error htmlFor="email" />
                </div>
                <div className="field">
                    Password: <Input type="password" name="password" />
                    <Error htmlFor="password" />
                </div>
                <div className="actions">
                    <button>Login</button>
                </div>
            </Form>
        );
    }
}
