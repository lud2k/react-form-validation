
import React from 'react';
import { BirthdateField } from './birthdate-field.js';
import './custom-rules.js';
import { Child } from './child.js';
import { Form, Context, Select, Input, Rules, Error } from '../src/index.js';

/**
 * This example shows the basic and also advance features of react-form-validation.
 */
export class Registration extends React.Component {
    /**
     * Returns the initial state of our component.
     */
    constructor(props) {
        super(props);
        this.state = {
            form: this.createForm(),
            children: [1]
        };
    }

    /**
     * Called when the user clicks on the "Add" link.
     */
    onClickAddChild(event) {
        event.preventDefault();

        // add an extra child id in the list of children
        var children = this.state.children,
            last = children.length ? children[children.length-1] : null;
        this.setState({
            children: children.concat(last ? last+1 : 1)
        });
    }

    /**
     * Called when the user clicks on the remove link of a child
     */
    onClickRemoveChild(child) {
        event.preventDefault();

        var children = this.state.children,
            index = children.indexOf(child);
        this.setState({
            children: children.slice(0, index).concat(children.slice(index+1))
        });
    }

    /**
     * Creates a form context that will be given to all fields of the page.
     * The form context manages the form state and its validation.
     */
    createForm() {
        return new Context({
            fields: {
                name: Rules.required(),
                // customUsername is a custom rule defined in custom-rules.js
                username: Rules.required().customUsername(),
                email: Rules.required().email(),
                password: Rules.required().password(),
                confirmPassword: Rules.equals('password'),
                birthdate: Rules.required().minAge(13),
                likes: Rules.custom(function(value, context) {
                    var type = context.getFieldValue('type');
                    if (type === 'male') {
                        // minLikes is a custom rule defined in custom-rules.js
                        return Rules.minLikes(2);
                    } else  if (type === 'female') {
                        return Rules.minLikes(3);
                    }
                }),
                terms: Rules.onlyIf(function(value, context) {
                        return context.getFieldValue('type') === 'male';
                    }).required('You have to agree to the terms and conditions'),
                child: {
                    name: Rules.required(),
                    password: Rules.required().password(),
                    confirmPassword: Rules.equals('password')
                }/*,
                childrenCount: {
                    virtual: true,
                    rules(data) {
                        console.log('data', data);
                    }
                }*/
            }
        });
    }

    /**
     * Called when the form is submitted (either the user has pressed enter or clicked the
     * save button).
     */
    onSubmit(event, valid, data) {
        this.setState({
            data: data,
            valid: valid
        });
    }

    /**
     * Renders the child account fields.
     */
    renderChildAccountFields(form) {
        var ret = [],
            children = this.state.children;
        for (var i=0; i<children.length; i++) {
            var prefix = `child[${i}]`;
            ret.push(
                <div className="fielset child" key={children[i]}>
                    <a href="#" className="remove"
                            onClick={this.onClickRemoveChild.bind(this, children[i])}>
                        X
                    </a>
                    <div className="field">
                        Name: <Input name={`${prefix}.name`} type="text" />
                        <Error forName={`${prefix}.name`} />
                    </div>
                    <div className="field">
                        Password: <Input name={`${prefix}.password`} type="text" />
                        <Error forName={`${prefix}.password`} />
                    </div>
                        <div className="field">
                        Confirm Password: <Input name={`${prefix}.confirmPassword`} type="text" />
                        <Error forName={`${prefix}.confirmPassword`} />
                    </div>
                </div>
            );
        }
        return ret;
    }

    /**
     * Returns the state of the form when submitted
     */
    renderSubmittedState() {
        if (this.state.valid !== undefined) {
            return (
                <div className="form-data">
                    Valid: {this.state.valid.toString()}<br />
                    Data: <br />
                    {JSON.stringify(this.state.data, null, 4)}
                </div>
            );
        }
    }

    /**
     * Renders the form.
     */
    render() {
        var form = this.state.form;
        return (
            <Form form={form} onSubmit={this.onSubmit.bind(this)}>
                <h1>Registration Form Example</h1>
                <Input name="id" type="hidden" defaultValue="123" />
                <div className="field">
                    Name: <Input name="name" type="text" />
                    <Error forName="name" />
                </div>
                <div className="field">
                    Username: <Input name="username" type="text" rules={Rules.required()} />
                    <Error forName="username" />
                </div>
                <div className="field">
                    Email: <Input name="email" type="text" />
                    <Error forName="email" />
                </div>
                <div className="field">
                    Password: <Input name="password" type="password" />
                    <Error forName="password" />
                </div>
                <div className="field">
                    Confirm Password: <Input name="confirmPassword" type="password" />
                    <Error forName="confirmPassword" />
                </div>
                <BirthdateField name="birthdate" />
                <div className="field">
                    <label>
                        <Input name="type" type="radio" value="male" /> Male
                    </label>
                    <label>
                        <Input name="type" type="radio" value="female" /> Female
                    </label>
                    <Error forName="type" />
                </div>
                <div className="field">
                    Likes:<br />
                    <label>
                        <Input name="likes" type="checkbox" value="movies" /> Movies
                    </label><br />
                    <label>
                        <Input name="likes" type="checkbox" value="books" /> Books
                    </label><br />
                    <label>
                        <Input name="likes" type="checkbox" value="sports" /> Sports
                    </label><br />
                    <label>
                        <Input name="likes" type="checkbox" value="shows" /> Shows
                    </label><br />
                    <Error forName="likes" />
                </div>
                <div className="field">
                    Child accounts [ <a href="#" onClick={this.onClickAddChild.bind(this)}>Add</a> ]:<br />
                    {this.renderChildAccountFields(form)}
                    <Error forName="childrenCount" />
                </div>
                <div className="field">
                    <Input name="terms" type="checkbox" value="accept" />
                    Accept Terms
                    <Error forName="terms" />
                </div>
                <div className="actions">
                    <button type="submit">Register</button>
                </div>
                {this.renderSubmittedState()}
            </Form>
        );
    }
}
