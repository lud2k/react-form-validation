
import React from 'react';
import { Context, Error, Hint, Rules, Form, Input, Field } from 'react-form-validation';

/**
 * Registration form.
 */
export default class BirthDateField extends Field {
    /**
     * Returns the value of the component, a JavaScript Date object.
     */
    getValue() {
        var day = this.refs.day.value,
            month = this.refs.month.value,
            year = this.refs.year.value;
        if (day && month && year) {
            var ret = new Date(year, month-1, day);
            // check that the date was valid (Feb 31st is invalid)
            if (ret.getDate() != day || ret.getMonth() != month-1  || ret.getFullYear() != year) {
                throw 'invalid_date';
            }
            return ret;
        }
    }

    /**
     * Called when one of the <select> selection has changed.
     */
    onChange() {
        // validate the field only if it was already validated before
        this.validateField(false);
    }

    /**
     * Called when one of the <select> has lost focus.
     */
    onBlur() {
        // did the user select all three values?
        if (this.refs.day.value && this.refs.month.value && this.refs.year.value) {
            // force validation of field
            this.validateField(true);
        }
    }

    /**
     * Renders the options for the year <select>.
     */
    renderOptions(label, start, end, reversed) {
        var ret = [];
        ret.push(<option key={-1} value="" disabled>{ label }</option>);
        for (var i=start; i<=end; i++) {
            var j = reversed ? end - i + start : i;
            ret.push(<option key={j} value={j}>{j}</option>);
        }
        return ret;
    }

    /**
     * Renders the component.
     */
    render() {
        return (
            <span className="field-group">
                <select name="day" ref="day" defaultValue=""
                        onChange={this.onChange.bind(this)}
                        onBlur={this.onBlur.bind(this)}>
                    {this.renderOptions('Day', 1, 31)}
                </select>
                <select name="month" ref="month" defaultValue=""
                        onChange={this.onChange.bind(this)}
                        onBlur={this.onBlur.bind(this)}>
                    {this.renderOptions('Month', 1, 12)}
                </select>
                <select name="year" ref="year" defaultValue=""
                        onChange={this.onChange.bind(this)}
                        onBlur={this.onBlur.bind(this)}>
                    {this.renderOptions('Year', new Date().getFullYear()-100,
                        new Date().getFullYear(), true)}
                </select>
            </span>
        );
    }
}
