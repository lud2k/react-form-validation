
import { Context, Error, Rules, Form, Input, Hint } from 'react-form-validation';

/**
 * Registers a custom rule for validating usernames.
 * the rules will be accessible form Rules.{ruleName}.
 */
Rules.register('myCustomUsernameRule', function() {
    return {
        check: function check(value) {
            if (!/^[a-z0-9]+$/.test(value)) {
                return 'letters';
            }
            if (!value || value.length < 5) {
                return 'length';
            }
            if (!/[0-9]+$/.test(value)) {
                return 'syntax';
            }
            return true;
        },
        messages: {
            letters: 'Username should only contain lower case characters or numbers',
            length: 'Username should be at least 5 characters',
            syntax: 'Username should end with numbers'
        }
    };
});

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
            form: new Context({
                fields: {
                    username: Rules.required().myCustomUsernameRule()
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
                <h4>Custom Rule</h4>
                <div className="field">
                    Username: <Input type="text" name="username" />
                    <Error forName="username" />
                    <Hint forName="username" display="error|valid|pristine">
                        Should contain at least 5 characters (lowercase letters or numbers) and end
                        with a number. Why? Because!
                    </Hint>
                </div>
                <div className="actions">
                    <button>Validate</button>
                </div>
            </Form>
        );
    }
}
