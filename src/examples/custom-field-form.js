
var ReactDOM = require('react-dom'),
    ReactFormValidation = require('react-form-validation'),
    Instance = ReactFormValidation.Instance,
    Error = ReactFormValidation.Error,
    Rules = ReactFormValidation.Rules,
    Form = ReactFormValidation.Form,
    Input = ReactFormValidation.Input,
    FieldMixin = ReactFormValidation.FieldMixin,
    Hint = ReactFormValidation.Hint;

var BirthdateField = React.createClass({
    /**
     * Make this component a "Field".
     */
    mixins: [FieldMixin],

    /**
     * Returns the value of the component.
     */
    getValue: function() {
        var day = ReactDOM.findDOMNode(this.refs.day).value,
            month = ReactDOM.findDOMNode(this.refs.month).value,
            year = ReactDOM.findDOMNode(this.refs.year).value;
        if (day && month && year) {
            return new Date(year, month, day);
        }
    },

    /**
     * Called when one of the <select> selection has changed.
     */
    onChange: function() {
        this.props.form.onChange(this);
    },

    /**
     * Renders the options for the year <select>.
     */
    renderOptions: function(label, start, end, reversed) {
        var ret = [];
        ret.push(<option key={-1} value="">{ label }</option>);
        for (var i=start; i<=end; i++) {
            var j = reversed ? end - i + start : i;
            ret.push(<option key={j} value={j}>{j}</option>);
        }
        return ret;
    },

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <span className="field-group">
                <select name="day" ref="day" onChange={this.onChange}>
                    {this.renderOptions('Day', 1, 31)}
                </select>
                <select name="month" ref="month" onChange={this.onChange}>
                    {this.renderOptions('Month', 1, 12)}
                </select>
                <select name="year" ref="year" onChange={this.onChange}>
                    {this.renderOptions('Year', new Date().getFullYear()-100,
                        new Date().getFullYear(), true)}
                </select>
            </span>
        );
    }
});

/**
 * Simple login form.
 */
module.exports = React.createClass({
    /**
     * Returns the initial state of the component.
     */
    getInitialState: function() {
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
    render: function() {
        var form = this.state.form;
        return (
            <Form form={form} onSubmit={this.props.formSubmitted}>
                <h4>Custom Field</h4>
                <div className="field">
                    Birthdate: <BirthdateField name="birthdate" form={form} />
                    <Error forName="birthdate" form={form} />
                    <Hint forName="birthdate" form={form} text="You have to be at least 13"
                        display="pristine" />
                </div>
                <div className="actions">
                    <button>Validate</button>
                </div>
            </Form>
        );
    }
});
