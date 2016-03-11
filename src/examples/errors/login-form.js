
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
     * Called when the component is mounted.
     */
    componentDidMount() {
        // validate fields to show errors
        this.state.context.validate(null, true);
    }

    /**
     * Renders the form.
     */
    render() {
        return (
            <Form context={this.state.context} onSubmit={Utils.onFormSubmitted}>
                <h4>Login</h4>
                <div className="field">
                    Email: <Input type="text" name="email" defaultValue="invalid.email" />
                    <Error htmlFor="email" />
                </div>
                <div className="field">
                    Password: <Input type="password" name="password" />
                    <Error htmlFor="password" />
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
