
import Code from '../code.js';
import RulesRegisterCode from './rules-register.code.txt';

/**
 * The main page of the website.
 */
export default class RulesDocumentation extends React.Component {
    /**
     * Renders the form.
     */
    render() {
        return (
            <div className="documentation">
                <h2> Rules Class </h2>
                <div className="documentation-content">
                    <p>
                        The Rules class is what is used to validate field values.
                    </p>
                    <h3>Basic usage</h3>
                    <p>
                        To create a rule you just need to call the name of the rule on the Rules
                        class as follow:
                    </p>
                    <Code>
                        Rules.required().password().anyOtherRule()
                    </Code>
                    <p>
                        The order in which you call the functions is the order in which the rules
                        will be executed. In the code above, the required rule will first check
                        that the value is not empty or falsy, then the password rule will check
                        that the value is a valid password and finally the anyOtherRule will
                        be executed last.
                    </p>
                    <h3>Existing rules</h3>
                    <h4>Rules.email()</h4>
                    <p>
                        <span className="inline-code">Rules.email(customErrorMessage?)</span> checks
                        that the value is a proper email.<br />
                        <span className="inline-code">customErrorMessage</span> is an optional
                        argument that allows you to change the default error message returned by
                        the rule.
                    </p>
                    <h4>Rules.password()</h4>
                    <p>
                        <span className="inline-code">Rules.password(customErrorMessages?)</span> checks
                        that the value is a complex password. It expects the password to have at least
                        8 characters, an uppercase character, a lowercase character and a numer.<br />
                        If you want to change the default error message returned by the rule you
                        may give a string as first argument: <span className="inline-code">
                        Rules.email('My custom error message')</span>.
                    </p>
                    - password<br />
                    - equals<br />
                    - minAge<br />
                    - regex<br />
                    - integer<br />
                    - required<br />
                    - optional<br />
                    - custom<br />
                    - onlyIf<br />
                    <br />
                    You can register a new rule using the register method.
                    This will override any previously registered rule, even the default rules.<br />
                    <br />
                    <Code value={RulesRegisterCode} />
                </div>
            </div>
        );
    }
}
