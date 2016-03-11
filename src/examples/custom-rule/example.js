
import ComponentSource from '../../component-source.js';
import CustomRuleForm from './custom-rule-form.js';
import CustomRuleFormText from './custom-rule-form.txt';
import CustomUsernameRuleText from './custom-username-rule.txt';
import UtilsText from '../../utils.txt';

/**
 * Component that renders an example.
 */
export default class LoginExample extends React.Component {
    /**
     * Returns the initial state of this component.
     */
    constructor(props) {
        super(props);
        this.state = {};
    }

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
                <h2>Custom Rule</h2>
                <p>
                    Here is a simple example showing you how to define a custom rule.
                </p>
                <p>
                    Take a look at <u>custom-username-rule.jsx</u> to see how the rule is created.
                </p>
                <ComponentSource component={CustomRuleForm}
                                 sources={[
                                    {name: 'custom-rule-form.jsx', code: CustomRuleFormText},
                                    {name: 'custom-username-rule.jsx', code: CustomUsernameRuleText},
                                     {name: 'utils.jsx', code: UtilsText}
                                 ]} />
            </div>
        );
    }
}
