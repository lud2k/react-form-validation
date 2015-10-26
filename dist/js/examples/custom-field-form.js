"use strict";

var ReactFormValidation = require('react-form-validation'),
    Instance = ReactFormValidation.Instance,
    Error = ReactFormValidation.Error,
    Rules = ReactFormValidation.Rules,
    Form = ReactFormValidation.Form,
    Input = ReactFormValidation.Input,
    FieldMixin = ReactFormValidation.FieldMixin,
    Hint = ReactFormValidation.Hint;

var BirthdateField = React.createClass({
    displayName: "BirthdateField",

    /**
     * Make this component a "Field".
     */
    mixins: [FieldMixin],

    /**
     * Returns the value of the component.
     */
    getValue: function getValue() {
        var day = React.findDOMNode(this.refs.day).value,
            month = React.findDOMNode(this.refs.month).value,
            year = React.findDOMNode(this.refs.year).value;
        if (day && month && year) {
            return new Date(year, month, day);
        }
    },

    /**
     * Called when one of the <select> selection has changed.
     */
    onChange: function onChange() {
        this.props.form.onChange(this);
    },

    /**
     * Renders the options for the year <select>.
     */
    renderOptions: function renderOptions(label, start, end, reversed) {
        var ret = [];
        ret.push(React.createElement(
            "option",
            { key: -1, value: "" },
            label
        ));
        for (var i = start; i <= end; i++) {
            var j = reversed ? end - i + start : i;
            ret.push(React.createElement(
                "option",
                { key: j, value: j },
                j
            ));
        }
        return ret;
    },

    /**
     * Renders the component.
     */
    render: function render() {
        return React.createElement(
            "span",
            { className: "field-group" },
            React.createElement(
                "select",
                { name: "day", ref: "day", onChange: this.onChange },
                this.renderOptions('Day', 1, 31)
            ),
            React.createElement(
                "select",
                { name: "month", ref: "month", onChange: this.onChange },
                this.renderOptions('Month', 1, 12)
            ),
            React.createElement(
                "select",
                { name: "year", ref: "year", onChange: this.onChange },
                this.renderOptions('Year', new Date().getFullYear() - 100, new Date().getFullYear(), true)
            )
        );
    }
});

/**
 * Simple login form.
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
                    birthdate: Rules.required().minAge(13)
                }
            })
        };
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
                "Custom Field"
            ),
            React.createElement(
                "div",
                { className: "field" },
                "Birthdate: ",
                React.createElement(BirthdateField, { name: "birthdate", form: form }),
                React.createElement(Error, { forName: "birthdate", form: form }),
                React.createElement(Hint, { forName: "birthdate", form: form, text: "You have to be at least 13",
                    display: "pristine" })
            ),
            React.createElement(
                "div",
                { className: "actions" },
                React.createElement(
                    "button",
                    null,
                    "Validate"
                )
            )
        );
    }
});