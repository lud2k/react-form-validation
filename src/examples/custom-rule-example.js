
var CustomRuleForm = require('./custom-rule-form.js'),
    CustomRuleFormTxt = require('./custom-rule-form.txt'),
    Code = require('../code.js');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'CustomRuleExample',

    /**
     * Renders the form.
     */
    render: function() {
        return (
            <div className="example">
                <h3>Example 3: Custom Rule</h3>
                <div className="code-preview">
                    <div className="preview">
                        <CustomRuleForm />
                    </div>
                    <Code value={CustomRuleFormTxt} />
                </div>
            </div>
        );
    }
});
