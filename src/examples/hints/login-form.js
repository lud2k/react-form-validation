
import React from 'react';
import { Context, Error, Hint, Rules, Form, Input } from 'react-form-validation';
import Utils from '../../utils.js';

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
            context: new Context({
                fields: {
                    username: Rules.required(),
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
            <Form context={this.state.context} onSubmit={Utils.onFormSubmitted}>
                <h4>Login</h4>
                <div className="field">
                    Username: <Input type="text" name="username" />
                    <Error htmlFor="username" />
                    <Hint htmlFor="username" text="Only visible if field not validated"
                          display="pristine" />
                </div>
                <div className="field">
                    Email: <Input type="text" name="email" />
                    <Error htmlFor="email" />
                    <Hint htmlFor="email" text="Only visible if field valid or not yet validated"
                          display="pristine|valid" />
                </div>
                <div className="field">
                    Password: <Input type="password" name="password" />
                    <Error htmlFor="password" />
                    <Hint htmlFor="password" text="Always visible"
                          display="pristine|valid|error"/>
                </div>
                <div className="actions">
                    <button>Submit</button>
                    <button type="button"
                            onClick={Utils.onClickShowData.bind(this, this.state.context)}>
                        Show Data
                    </button>
                </div>
            </Form>
        );
    }
}
