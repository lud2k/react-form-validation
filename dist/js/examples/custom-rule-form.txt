
var ReactFormValidation = require('react-form-validation'),
    Instance = ReactFormValidation.Instance,
    Error = ReactFormValidation.Error,
    Rules = ReactFormValidation.Rules,
    Form = ReactFormValidation.Form,
    Input = ReactFormValidation.Input,
    Hint = ReactFormValidation.Hint;

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
                    username: Rules.required().myCustomUsernameRule()
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
            <Form form={form}>
                <h4>Custom Rule</h4>
                <div className="field">
                    Username: <Input type="text" name="username" form={form} />
                    <Error forName="username" form={form} />
                    <Hint forName="username" form={form} display="error|valid|pristine">
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
});
