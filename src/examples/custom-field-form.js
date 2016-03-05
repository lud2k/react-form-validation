
import ReactDOM from 'react-dom';
import { Context, Error, Rules, Form, Input, Field, Hint } from 'react-form-validation';

class BirthdateField extends Field {
    /**
     * Returns the value of the component.
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
     */
    onChange() {
        this.validateField(false);
    }

    /**
     * Renders the options for the year <select>.
     */
    renderOptions(label, start, end, reversed) {
        var ret = [];
        ret.push(<option key={-1} value="">{ label }</option>);
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
                <select name="day" ref="day" onChange={this.onChange.bind(this)}>
                    {this.renderOptions('Day', 1, 31)}
                </select>
                <select name="month" ref="month" onChange={this.onChange.bind(this)}>
                    {this.renderOptions('Month', 1, 12)}
                </select>
                <select name="year" ref="year" onChange={this.onChange.bind(this)}>
                    {this.renderOptions('Year', new Date().getFullYear()-100,
                        new Date().getFullYear(), true)}
                </select>
            </span>
        );
    }
}

/**
 * Simple login form.
 */
export default class CustomFieldForm extends React.Component {
    /**
     * Returns the initial state of the component.
     */
    constructor(props) {
        super(props);

        this.state = {
            form: new Context({
                fields: {
                    birthdate: Rules.required().minAge(13)
                }
            })
        };
    }

    /**
     * Renders the form.
     */
    render() {
        return (
            <Form form={this.state.form} onSubmit={this.props.formSubmitted}>
                <h4>Custom Field</h4>
                <div className="field">
                    Birthdate: <BirthdateField name="birthdate" />
                    <Error forName="birthdate" />
                    <Hint forName="birthdate" text="You have to be at least 13"
                        display="pristine" />
                </div>
                <div className="actions">
                    <button>Validate</button>
                </div>
            </Form>
        );
    }
}
