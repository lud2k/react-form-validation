
var Code = require('../code.js'),
    CustomRuleForm = require('./custom-rule-form.js'),
    CustomRuleTxt = require('./custom-rule-form.txt');

/**
 * Component that renders an example.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'CustomRuleExample',

    /**
     * Returns the initial state of this component.
     */
    getInitialState: function() {
        return {};
    },

    /**
     * Called when the form is submitted.
     */
    formSubmitted: function(valid, data) {
        this.setState({
            formData: data,
            formValid: valid
        });
    },

    /**
     * Renders the example.
     */
    render: function() {
        return (
            <div className="example">
                <h2>Custom Rule</h2>
                <div className="code-preview">
                    <div className="right-side">
                        <div className="preview">
                            <CustomRuleForm formSubmitted={this.formSubmitted} />
                        </div>
                        <div className="data">
                            Form is valid: { this.state.formValid ? 'No' : 'Yes' }{'\n'}
                            Submitted form data:{'\n'}
                            {this.state.formData ? JSON.stringify(this.state.formData, null, 2) : 'not yet validated'}
                        </div>
                    </div>
                    <Code value={CustomRuleTxt} />
                </div>
            </div>
        );
    }
});
