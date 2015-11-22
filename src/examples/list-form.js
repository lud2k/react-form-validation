
var ReactFormValidation = require('react-form-validation'),
    Instance = ReactFormValidation.Instance,
    Error = ReactFormValidation.Error,
    Hint = ReactFormValidation.Hint,
    Rules = ReactFormValidation.Rules,
    Form = ReactFormValidation.Form,
    Input = ReactFormValidation.Input;

/**
 * Friend item form.
 */
var FriendForm = React.createClass({
    render: function() {
        var form = this.props.form;
        return (
            <div className="fieldset friend">
                <b>Friend {this.props.index + 1}</b>
                <div className="field">
                    Name: <Input type="text" name="name" form={form} />
                    <Error forName="name" form={form} />
                </div>
                <div className="field">
                    Age: <Input type="text" name="age" form={form} />
                    <Error forName="age" form={form} />
                </div>
            </div>
        );
    }
});

/**
 * List example form.
 */
module.exports = React.createClass({
    /**
     * Returns the initial state of the component.
     */
    getInitialState: function() {
        return {
            form: new Instance({
                fields: {
                    friend: {
                        name: Rules.required(),
                        age: Rules.optional().integer()
                    }
                }
            }),
            nbFriends: 2
        };
    },

    /**
     * Called when the user clicks "add friend".
     */
    onClickAddFriend: function() {
        this.setState({
            nbFriends: this.state.nbFriends+1
        });
    },

    /**
     * Renders the form.
     */
    renderFriendFields: function(form) {
        var ret = [];
        for (var i=0; i<this.state.nbFriends; i++) {
            var subform = form.fieldset('friend', i);
            ret.push(<FriendForm key={i} index={i} form={subform} />);
        }
        return ret;
    },

    /**
     * Renders the form.
     */
    render: function() {
        var form = this.state.form;
        return (
            <Form form={form} onSubmit={this.props.formSubmitted}>
                <h4>Friend List</h4>
                { this.renderFriendFields(form) }
                <div className="actions">
                    <button type="button" onClick={this.onClickAddFriend}>Add Friend</button>
                    <button>Validate</button>
                </div>
            </Form>
        );
    }
});
