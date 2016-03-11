
import Code from '../code.js';
import RulesRegisterCode from './rules-register.txt';
import RulesRegister2Code from './rules-register2.txt';
import RulesSetMessagesCode from './rules-set-messages.txt';

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
                    <p>
                        This is the full list of all rules that are part of this library.
                        All the rules have as last parameter <u>customErrorMessage</u> or
                        <u>customErrorMessages</u>. This allows you to customize the error message
                        for a specific field / rule.
                    </p>
                    <h4>Rules.email(customErrorMessage?)</h4>
                    <p>
                        <u>Rules.email()</u> checks that the value is a proper email.
                    </p>
                    <h4>Rules.password(customErrorMessages?)</h4>
                    <p>
                        <u>Rules.password()</u> checks
                        that the value is a complex password. It expects the password to have at least
                        8 characters, an uppercase character, a lowercase character and a number.
                    </p>
                    <h4>Rules.minLength(length, customErrorMessages?)</h4>
                    <p>
                        <u>Rules.length()</u> checks that the value's length is at
                        least <u>length</u>.
                    </p>
                    <h4>Rules.equals(otherFieldName, customErrorMessage?)</h4>
                    <p>
                        <u>Rules.equals()</u> checks that the field
                        named <u>otherFieldName</u> contains the same value. It will try to find
                        the field in the current group and then go to parent groups if needed.
                    </p>
                    <h4>Rules.minAge(minAge, customErrorMessage?)</h4>
                    <p>
                        <u>Rules.minAge()</u> checks that the Date field contains a date that is
                        older than <u>minAge</u> years.
                    </p>
                    <h4>Rules.regex(regex, customErrorMessage?)</h4>
                    <p>
                        <u>Rules.regex()</u> checks that the field's value matches the given
                        regular expression.
                    </p>
                    <h4>Rules.integer(customErrorMessage?)</h4>
                    <p>
                        <u>Rules.integer()</u> checks that the field contains an integer.
                    </p>
                    <h4>Rules.required(customErrorMessage?)</h4>
                    <p>
                        <u>Rules.required()</u> checks that the field is not empty. A field is not
                        empty if: <br />
                        - its value is a non empty array<br />
                        - its value is a non empty string<br />
                        - its value is not <u>null</u> or <u>undefined</u>
                    </p>
                    <h4>Rules.optional()</h4>
                    <p>
                        <u>Rules.optional()</u> causes validation to succeed if the field is empty.
                        This means that rules after this one will not get executed if the field
                        is empty.
                    </p>
                    <h4>Rules.custom(function, customErrorMessage?)</h4>
                    <p>
                        <u>Rules.custom()</u> calls the <u>function</u> argument and expect this
                        function to return <u>true</u> if the field is valid. <u>customErrorMessage</u>
                        is shown if there are any errors.
                    </p>
                    <h4>Rules.onlyIf(function)</h4>
                    <p>
                        <u>Rules.onlyIf()</u> is like <u>Rules.optional()</u> but instead of
                        checking if a field is empty it calls the argument <u>function</u>. If
                        this function returns true, then the field is marked valid and all rules
                        following this one don't get executed.
                    </p>
                    <h4>Rules.url(customErrorMessages?)</h4>
                    <p>
                        <u>Rules.url()</u> checks that the field contains a valid url.
                    </p>
                    <h4>Rules.noError(customErrorMessage?)</h4>
                    <p>
                        <u>Rules.noError()</u> checks that the previous rule didn't throw an error.
                    </p>
                    <h3>Create new rules</h3>
                    <p>
                        You can create a new rule using the <u>register()</u> method.
                        This will override any previously registered rule, even the default rules.
                    </p>
                    <h4>
                        Rule with only one error message
                    </h4>
                    <Code value={RulesRegister2Code} />
                    <h4>
                        Rule with multiple error messages
                    </h4>
                    <Code value={RulesRegisterCode} />
                    <h3>Customize messages globally</h3>
                    <p>
                        As describe in the rules documentation above, you can give a custom message
                        while creating the Rules object.<br />
                        If you wish to change the default message for all the rules you can also
                        call <u>Rules.setMessages(messages)</u>. This is useful if you would like to
                        support a different language or would like to change the default of
                        a rule message.
                    </p>
                    <Code value={RulesSetMessagesCode} />
                </div>
            </div>
        );
    }
}
