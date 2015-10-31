"use strict";

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
    displayName: "FriendForm",

    render: function render() {
        var form = this.props.form;
        return React.createElement(
            "div",
            { className: "fieldset friend" },
            React.createElement(
                "b",
                null,
                "Friend ",
                this.props.index + 1
            ),
            React.createElement(
                "div",
                { className: "field" },
                "Name: ",
                React.createElement(Input, { type: "text", name: "name", form: form }),
                React.createElement(Error, { forName: "name", form: form })
            ),
            React.createElement(
                "div",
                { className: "field" },
                "Age: ",
                React.createElement(Input, { type: "text", name: "age", form: form }),
                React.createElement(Error, { forName: "age", form: form })
            )
        );
    }
});

/**
 * List example form.
 */
module.exports = React.createClass({
    displayName: "exports",

    /**
     * Returns the initial state of the component.
     */
    getInitialState: function getInitialState() {
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
    onClickAddFriend: function onClickAddFriend() {
        this.setState({
            nbFriends: this.state.nbFriends + 1
        });
    },

    /**
     * Renders the form.
     */
    renderFriendFields: function renderFriendFields(form) {
        var ret = [];
        for (var i = 0; i < this.state.nbFriends; i++) {
            var subform = form.fieldset('friend', i);
            ret.push(React.createElement(FriendForm, { key: i, index: i, form: subform }));
        }
        return ret;
    },

    /**
     * Renders the form.
     */
    render: function render() {
        var form = this.state.form;
        return React.createElement(
            Form,
            { form: form },
            React.createElement(
                "h4",
                null,
                "Friend List"
            ),
            this.renderFriendFields(form),
            React.createElement(
                "div",
                { className: "actions" },
                React.createElement(
                    "button",
                    { type: "button", onClick: this.onClickAddFriend },
                    "Add Friend"
                ),
                React.createElement(
                    "button",
                    null,
                    "Validate"
                )
            )
        );
    }
});