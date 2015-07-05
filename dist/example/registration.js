
var BirthdateField = require('./birthdate-field.js'),
    CustomRules = require('./custom-rules.js'),
    Child = require('./child.js'),
    Form = require('../src/form.js'),
    Input = Form.Input,
    Select = Form.Select,
    Rules = Form.Rules,
    Error = Form.Error;

/**
 * This example shows the basic and also advance features of react-form-validation.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Registration',

    /**
     * Returns the initial state of our component.
     */
    getInitialState: function() {
        return {
            form: this.createForm(),
            children: [1]
        };
    },

    /**
     * Called when the user clicks on the "Add" link.
     */
    onClickAddChild: function(event) {
        event.preventDefault();

        // add an extra child id in the list of children
        var children = this.state.children,
            last = children.length ? children[children.length-1] : null;
        this.setState({
            children: children.concat(last ? last+1 : 1)
        });
    },

    /**
     * Called when the user clicks on the remove link of a child
     */
    onClickRemoveChild: function(child) {
        event.preventDefault();

        var children = this.state.children,
            index = children.indexOf(child);
        this.setState({
            children: children.slice(0, index).concat(children.slice(index+1))
        });
    },

    /**
     * Creates a form instance that will be given to all fields of the page.
     * The form instance manages the form state and its validation.
     */
    createForm: function() {
        return new Form.Instance({
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
                    rules: function(data) {
                        console.log('data', data);
                    }
                }*/
            }
        });
    },

    /**
     * Called when the form is submitted (either the user has pressed enter or clicked the
     * save button).
     */
    onSubmit: function(valid, data) {
        this.setState({
            data: data,
            valid: valid
        });
    },

    /**
     * Renders the child account fields.
     */
    renderChildAccountFields: function(form) {
        var ret = [],
            children = this.state.children;
        for (var i=0; i<children.length; i++) {
            var formPart = form.fieldset('child', i);
            ret.push(
                <div className="fielset child" key={children[i]}>
                    <a href="#" className="remove"
                            onClick={this.onClickRemoveChild.bind(this, children[i])}>
                        X
                    </a>
                    <div className="field">
                        Name: <Input name="name" type="text" form={formPart} />
                        <Error forName="name" form={formPart} />
                    </div>
                    <div className="field">
                        Password: <Input name="password" type="text" form={formPart} />
                        <Error forName="password" form={formPart} />
                    </div>
                        <div className="field">
                        Confirm Password: <Input name="confirmPassword" type="text" form={formPart} />
                        <Error forName="confirmPassword" form={formPart} />
                    </div>
                </div>
            );
        }
        return ret;
    },

    /**
     * Returns the state of the form when submitted
     */
    renderSubmittedState: function() {
        if (this.state.valid !== undefined) {
            return (
                <div className="form-data">
                    Valid: {this.state.valid.toString()}<br />
                    Data: <br />
                    {JSON.stringify(this.state.data, null, 4)}
                </div>
            );
        }
    },

    /**
     * Renders the form.
     */
    render: function() {
        var form = this.state.form;
        return (
            <Form form={form} onSubmit={this.onSubmit}>
                <h1>Registration Form Example</h1>
                <Input name="id" type="hidden" defaultValue="123" form={form} />
                <div className="field">
                    Name: <Input name="name" type="text" form={form} />
                    <Error forName="name" form={form} />
                </div>
                <div className="field">
                    Username: <Input name="username" type="text" form={form} rules={Rules.required()} />
                    <Error forName="username" form={form} />
                </div>
                <div className="field">
                    Email: <Input name="email" type="text" form={form} />
                    <Error forName="email" form={form} />
                </div>
                <div className="field">
                    Password: <Input name="password" type="password" form={form} />
                    <Error forName="password" form={form} />
                </div>
                <div className="field">
                    Confirm Password: <Input name="confirmPassword" type="password" form={form} />
                    <Error forName="confirmPassword" form={form} />
                </div>
                <BirthdateField name="birthdate" form={form} />
                <div className="field">
                    <label>
                        <Input name="type" type="radio" form={form} value="male" /> Male
                    </label>
                    <label>
                        <Input name="type" type="radio" form={form} value="female" /> Female
                    </label>
                    <Error forName="type" form={form} />
                </div>
                <div className="field">
                    Likes:<br />
                    <label>
                        <Input name="likes" type="checkbox" value="movies" form={form} /> Movies
                    </label><br />
                    <label>
                        <Input name="likes" type="checkbox" value="books" form={form} /> Books
                    </label><br />
                    <label>
                        <Input name="likes" type="checkbox" value="sports" form={form} /> Sports
                    </label><br />
                    <label>
                        <Input name="likes" type="checkbox" value="shows" form={form} /> Shows
                    </label><br />
                    <Error forName="likes" form={form} />
                </div>
                <div className="field">
                    Child accounts [ <a href="#" onClick={this.onClickAddChild}>Add</a> ]:<br />
                    {this.renderChildAccountFields(form)}
                    <Error forName="childrenCount" form={form} />
                </div>
                <div className="field">
                    <Input name="terms" type="checkbox" value="accept" form={form} />
                    Accept Terms
                    <Error forName="terms" form={form} />
                </div>
                <div className="actions">
                    <button type="submit">Register</button>
                </div>
                {this.renderSubmittedState()}
            </Form>
        );
    }
});
