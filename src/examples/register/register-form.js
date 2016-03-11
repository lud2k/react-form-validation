
import React from 'react';
import { Context, Error, Hint, Rules, Form, Input } from 'react-form-validation';
import BirthDateField from './birthdate-field.js';
import Modal from '../../modal.js';
import Code from '../../code.js';
import Utils from '../../utils.js';

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
            context: new Context({
                fields: {
                    username: Rules.required().regex(/^[a-z0-9_]+$/,
                        'Should only contain letters, numbers and _.'),
                    email: Rules.required('This is overriden').email(),
                    password: Rules.required().password(),
                    confirmPassword: Rules.equals('password'),
                    birthDate: Rules.required().noError(),
                    terms: Rules.required('You have to accept the terms of service')
                }
            })
        };
    }

    /**
     * Renders the form.
     */
    render() {
        return (
            <Form context={this.state.context}
                  onSubmit={Utils.onFormSubmitted}
                  preventSubmit={true}
                  scrollToErrorPadding={70}>
                <h4>Registration Form</h4>
                <div className="field">
                    Username: <Input type="text" name="username" />
                    <Error htmlFor="username" />
                    <Hint htmlFor="username"
                        text="Only letters, numbers or _ is allowed" />
                </div>
                <div className="field">
                    Email: <Input type="text" name="email" />
                    <Error htmlFor="email" />
                </div>
                <div className="field">
                    Password: <Input type="password" name="password" />
                    <Error htmlFor="password" />
                    <Hint htmlFor="password"
                        text="At least 8 characters, one uppercase, one lowercase and one number" />
                </div>
                <div className="field">
                    Confirm Password: <Input type="password" name="confirmPassword" />
                    <Error htmlFor="confirmPassword" />
                </div>
                <div className="field">
                    Birth Date: <BirthDateField name="birthDate" />
                    <Error htmlFor="birthDate" />
                </div>
                <div className="field">
                    <Input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms"> I accept the terms of service </label>
                    <Error htmlFor="terms" />
                </div>
                <div className="actions">
                    <button>Register</button>
                    <button type="button"
                            onClick={Utils.onClickShowData.bind(this, this.state.context)}>
                        Show Data
                    </button>
                </div>
            </Form>
        );
    }
}
