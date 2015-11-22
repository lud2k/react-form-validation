
var ReactDOM = require('react-dom'),
    Form = require('../src/form.js'),
    FieldMixin = Form.FieldMixin,
    Error = Form.Error;

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'BirthdateField',

    /**
     * Make this component a "Field".
     *
     * Component will require the following props:
     *   - form, the form owning the component
     *   - name, the name of this component in the form.
     *
     * Component will require the following methods:
     *   - getValue(), should return the value of the current component.
     */
    mixins: [FieldMixin],

    /**
     * Returns the value of the component. This will be used during form validation to
     * check that the value is valid.
     * This component a Date object as value.
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
     * We need to tell the form that our custom component value has changed.
     */
    onChange: function() {
        if (this.props.form) {
            this.props.form.onChange(this);
        }
    },

    /**
     * Renders the options for the day <select>.
     */
    renderDayOptions: function() {
        var ret = [];
        ret.push(<option key={-1} value="">Day</option>);
        for (var i=1; i<32; i++) {
            ret.push(<option key={i} value={i}>{i}</option>);
        }
        return ret;
    },

    /**
     * Renders the options for the month <select>.
     */
    renderMonthOptions: function() {
        return [
            <option key={-1} value="">Month</option>,
            <option key={0} value={0}>January</option>,
            <option key={1} value={1}>February</option>,
            <option key={2} value={2}>March</option>,
            <option key={3} value={3}>April</option>,
            <option key={4} value={4}>May</option>,
            <option key={5} value={5}>June</option>,
            <option key={6} value={6}>July</option>,
            <option key={7} value={7}>August</option>,
            <option key={8} value={8}>September</option>,
            <option key={9} value={9}>October</option>,
            <option key={10} value={10}>November</option>,
            <option key={11} value={11}>December</option>
        ];
    },

    /**
     * Renders the options for the year <select>.
     */
    renderYearOptions: function() {
        var ret = [],
            currentYear = new Date().getFullYear();
        ret.push(<option key={-1} value="">Year</option>);
        for (var i=0; i<100; i++) {
            var year = currentYear-i;
            ret.push(<option key={year} value={year}>{year}</option>);
        }
        return ret;
    },

    /**
     * Renders the component.
     */
    render: function() {
        return (
            <div className="field">
                Birthdate:
                <select name="day" ref="day" onChange={this.onChange}>
                    {this.renderDayOptions()}
                </select>
                <select name="month" ref="month" onChange={this.onChange}>
                    {this.renderMonthOptions()}
                </select>
                <select name="year" ref="year" onChange={this.onChange}>
                    {this.renderYearOptions()}
                </select>
                <Error forName={this.props.name} form={this.props.form} />
            </div>
        );
    }
});
