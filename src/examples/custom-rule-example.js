
var CustomRuleForm = require('./custom-rule-form.js'),
    CustomRuleFormTxt = require('./custom-rule-form.txt');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'CustomRuleExample',

    /**
     * Called when the component is mounted.
     */
    componentDidMount: function() {
        // render code
        var doc = CodeMirror(React.findDOMNode(this.refs.code), {
            value: CustomRuleFormTxt.trim(),
            mode:  'javascript',
            readOnly: true
        });
        doc.markText({line: 20}, {line: 26}, {css: 'background-color: #FFF2B0'});
        doc.markText({line: 33}, {line: 45}, {css: 'background-color: #FFF2B0'});
    },

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
                    <div className="code" ref="code" />
                </div>
            </div>
        );
    }
});
