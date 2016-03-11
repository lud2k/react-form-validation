
import { Context, Error, Rules, Form, Input, Hint } from 'react-form-validation';
import './custom-username-rule.js';
import Utils from '../../utils.js';

/**
 * Custom rule form.
 */
export default class CustomRuleForm extends React.Component {
    /**
     * Returns the initial state of the component.
     */
    constructor(props) {
        super(props);

        this.state = {
            context: new Context({
                fields: {
                    username: Rules.required().customUsernameRule()
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
                <h4>Custom Rule</h4>
                <div className="field">
                    Username: <Input type="text" name="username" />
                    <Error htmlFor="username" />
                    <Hint htmlFor="username">
                        Should contain at least 5 characters (lowercase letters or numbers) and end
                        with a number. Why? Because!
                    </Hint>
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
