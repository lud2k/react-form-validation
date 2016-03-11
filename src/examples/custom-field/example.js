
import ComponentSource from '../../component-source.js';
import CustomFieldForm from './custom-field-form.js';
import CustomFieldFormText from './custom-field-form.txt';
import BirthdateFieldText from './birthdate-field.txt';
import UtilsText from '../../utils.txt';

/**
 * Component that renders an example.
 */
export default class Example extends React.Component {
    /**
     * Called when the form is submitted.
     */
    formSubmitted(event, valid, data) {
        this.setState({
            formData: data,
            formValid: valid
        });
    }

    /**
     * Renders the example.
     */
    render() {
        return (
            <div className="example">
                <h2>Custom Field</h2>
                <p>
                    To create a custom field you just need to create a component that extends
                    the Field class.
                </p>
                <h3> Setup </h3>
                <p>
                    Here are the necessary steps:
                </p>
                <ul>
                    <li>
                        Create a component that extends the Field class.
                    </li>
                    <li>
                        Create a <u>getValue()</u> method in your component.
                    </li>
                    <li>
                        Call <u>this.validateField(false)</u> when the component value changes.
                    </li>
                    <li>
                        Call <u>this.validateField(true)</u> when the component looses focus.
                    </li>
                    <li>
                        Give a <u>name</u> property when using your component.
                    </li>
                </ul>
                <h3> Example </h3>
                <p>
                    Here is an example of how to create a birthdate field.
                </p>
                <ComponentSource component={CustomFieldForm}
                                 sources={[
                                     {name: 'custom-field-form.jsx', code: CustomFieldFormText},
                                     {name: 'birthdate-field.jsx', code: BirthdateFieldText},
                                     {name: 'utils.jsx', code: UtilsText}
                                 ]} />
            </div>
        );
    }
}
