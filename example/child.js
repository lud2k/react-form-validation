
var Form = require('../src/form.js'),
    Input = Form.Input,
    Error = Form.Error;

/**
 * This example shows the basic and also advance features of react-form-validation.
 */
var RegistrationForm = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Child',

    /**
     * Renders the child form.
     */
    render: function() {
        var form = this.props.form;
        return (
            <div className="fielset child">
                <a href="#" className="remove" onClick={this.props.onClickRemove.bind(this, this)}>
                    X
                </a>
                <div className="field">
                    Name: <Input name="name" type="text" form={form} />
                    <Error forName="name" form={form} />
                </div>
                <div className="field">
                    Password: <Input name="password" type="text" form={form} />
                    <Error forName="password" form={form} />
                </div>
                    <div className="field">
                    Confirm Password: <Input name="confirmPassword" type="text" form={form} />
                    <Error forName="confirmPassword" form={form} />
                </div>
            </div>
        );
    }
});
