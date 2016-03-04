
import React from 'react';
import { Field, Error } from '../src/index.js';

export class BirthdateField extends Field {
    /**
     * Returns the value of the component. This will be used during form validation to
     * check that the value is valid.
     * This component a Date object as value.
     */
    getValue() {
        var day = this.refs.day.value,
            month = this.refs.month.value,
            year = this.refs.year.value;
        if (day && month && year) {
            return new Date(year, month, day);
        }
    }

    /**
     * Called when one of the <select> selection has changed.
     * We need to tell the form that our custom component value has changed.
     */
    onChange() {
        var force = this.refs.day.value && this.refs.month.value && this.refs.year.value;
        this.validateField(force);
    }

    /**
     * Renders the options for the day <select>.
     */
    renderDayOptions() {
        var ret = [];
        ret.push(<option key={-1} value="">Day</option>);
        for (var i=1; i<32; i++) {
            ret.push(<option key={i} value={i}>{i}</option>);
        }
        return ret;
    }

    /**
     * Renders the options for the month <select>.
     */
    renderMonthOptions() {
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
    }

    /**
     * Renders the options for the year <select>.
     */
    renderYearOptions() {
        var ret = [],
            currentYear = new Date().getFullYear();
        ret.push(<option key={-1} value="">Year</option>);
        for (var i=0; i<100; i++) {
            var year = currentYear-i;
            ret.push(<option key={year} value={year}>{year}</option>);
        }
        return ret;
    }

    /**
     * Renders the component.
     */
    render() {
        return (
            <div className="field">
                Birthdate:
                <select name="day" ref="day" onChange={this.onChange.bind(this)}>
                    {this.renderDayOptions()}
                </select>
                <select name="month" ref="month" onChange={this.onChange.bind(this)}>
                    {this.renderMonthOptions()}
                </select>
                <select name="year" ref="year" onChange={this.onChange.bind(this)}>
                    {this.renderYearOptions()}
                </select>
                <Error forName={this.props.name} form={this.props.form} />
            </div>
        );
    }
}
