
var LoginForm = require('./login-form.js'),
    LoginFormTxt = require('./login-form.txt'),
    Code = require('../code.js');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'LoginExample',

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
                    <Code value={LoginFormTxt} />
                </div>
            </div>
        );
    }
});
