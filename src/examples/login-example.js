
var LoginForm = require('./login-form.js'),
    LoginFormTxt = require('./login-form.txt');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'LoginExample',

    /**
     * Called when the component is mounted.
     */
    componentDidMount: function() {
        // render code
        var doc = CodeMirror(React.findDOMNode(this.refs.code), {
            value: LoginFormTxt.trim(),
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
                <h3>Example 1: Login</h3>
                <div className="code-preview">
                    <div className="preview">
                        <LoginForm />
                    </div>
                    <div className="code" ref="code" />
                </div>
            </div>
        );
    }
});
