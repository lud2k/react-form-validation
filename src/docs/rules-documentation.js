
var Code = require('../code.js'),
    RulesRegisterCode = require('./rules-register.code.txt');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'RulesDocumentation',

    /**
     * Renders the form.
     */
    render: function() {
        return (
            <div className="documentation">
                <h2> Rules Class </h2>
                <div className="documentation-content">
                    The Rules class is what is used to validate field values.<br />
                    <br />
                    To create a rule you just need to call the name of the rule on the Rules class as follow:<br/>
                    <Code>
                        Rules.required().password().anyOtherRule()
                    </Code>
                    <br />
                    List of rules available:<br />
                    - email<br />
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
});
