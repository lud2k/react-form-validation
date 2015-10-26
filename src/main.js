
var LoginExample = require('./examples/login-example.js'),
    RegisterExample = require('./examples/register-example.js'),
    CustomRuleExample = require('./examples/custom-rule-example.js'),
    CustomFieldExample = require('./examples/custom-field-example.js'),
    ListExample = require('./examples/list-example.js');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Main',

    /**
     * Renders the form.
     */
    render: function() {
        return (
            <div id="main">
                <div className="header-wrapper">
                    <div className="header">
                        <a className="logo" href="#">
                            <img src="logo.svg" />
                            React Form Validation
                        </a>
                        <a className="link" href="#download">
                            Install
                        </a>
                        <a className="link" href="#docs">
                            Documentation
                        </a>
                        <a className="link" href="#docs">
                            Examples
                        </a>
                        <a className="link" href="https://github.com/lud2k/react-form-validation">
                            GitHub
                        </a>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="content">
                        <div className="section">
                            <h2>Install</h2>
                            <h3>NPM</h3>
                            <div className="code">
                                npm install react-form-validation --save
                            </div>
                            <h3>Bower</h3>
                            <p>
                                This library can be used as an external javascript library. You can
                                use Bower to download it
                            </p>
                                <div className="code">
                                bower install react-form-validation --save
                            </div>
                            <h2>Usage</h2>
                            <h3>Browserify</h3>
                            <h3>Script</h3>
                            <div className="code">
                                {'<script type="text/javascript" src="react-form-validation.js"></script>'}
                            </div>
                        </div>
                        <div className="section">
                            <h2>Examples</h2>
                            <LoginExample />
                            <RegisterExample />
                            <CustomRuleExample />
                            <CustomFieldExample />
                            <ListExample />
                        </div>
                    </div>
                </div>
                <div className="footer-wrapper">
                    <div className="footer">
                        Created by <a href="https://github.com/lud2k">Ludovic Cabre</a>
                    </div>
                </div>
            </div>
        );
    }
});
