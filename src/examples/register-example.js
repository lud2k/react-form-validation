
var RegisterForm = require('./register-form.js'),
    RegisterFormTxt = require('./register-form.txt');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'RegisterExample',

    /**
     * Called when the component is mounted.
     */
    componentDidMount: function() {
        // render code
        var doc = CodeMirror(React.findDOMNode(this.refs.code), {
            value: RegisterFormTxt.trim(),
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
                <h3>Example 2: Registration</h3>
                <div className="code-preview">
                    <div className="preview">
                        <RegisterForm />
                    </div>
                    <div className="code" ref="code" />
                </div>
            </div>
        );
    }
});
