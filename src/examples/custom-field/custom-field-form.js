
import { Context, Error, Rules, Form, Input, Field, Hint } from 'react-form-validation';
import BirthdateField from './birthdate-field.js';
import Utils from '../../utils.js';

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
            context: new Context({
                fields: {
                    birthdate: Rules.required().noError().minAge(13)
                }
            })
        };
    }

    /**
     * Renders the form.
     */
    render() {
        return (
            <Form context={this.state.context} onSubmit={Utils.onFormSubmitted}>
                <h4>Custom Field</h4>
                <div className="field">
                    Birthdate: <BirthdateField name="birthdate" />
                    <Error htmlFor="birthdate" />
                    <Hint htmlFor="birthdate" text="You have to be at least 13"
                        display="pristine" />
                </div>
                <div className="actions">
                    <button>Submit</button>
                    <button type="button"
                            onClick={Utils.onClickShowData.bind(this, this.state.context)}>
                        Show Data
                    </button>
                </div>
            </Form>
        );
    }
}
