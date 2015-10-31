
var RegisterForm = require('./register-form.js'),
    RegisterFormTxt = require('./register-form.txt'),
    Code = require('../code.js');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'RegisterExample',

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
                    <Code value={RegisterFormTxt} />
                </div>
            </div>
        );
    }
});
