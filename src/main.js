
var LoginExample = require('./examples/login-example.js'),
    RegisterExample = require('./examples/register-example.js'),
    CustomRuleExample = require('./examples/custom-rule-example.js'),
    CustomFieldExample = require('./examples/custom-field-example.js'),
    ListExample = require('./examples/list-example.js'),
    RulesDocumentation = require('./docs/rules-documentation.js'),
    InstanceDocumentation = require('./docs/instance-documentation.js'),
    FormDocumentation = require('./docs/form-documentation.js'),
    InputDocumentation = require('./docs/input-documentation.js'),
    ErrorDocumentation = require('./docs/error-documentation.js'),
    HintDocumentation = require('./docs/hint-documentation.js'),
    SelectDocumentation = require('./docs/select-documentation.js'),
    ListenerMixinDocumentation = require('./docs/listener-mixin-documentation.js'),
    FieldMixinDocumentation = require('./docs/field-mixin-documentation.js'),
    Code = require('./code.js'),
    ImportCodeText = require('./import.code.txt');

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
                        <a className="link" href="#install">
                            Install
                        </a>
                        <a className="link" href="#usage">
                            Usage
                        </a>
                        <a className="link" href="#examples">
                            Examples
                        </a>
                        <a className="link" href="#documentation">
                            Documentation
                        </a>
                        <a className="link" href="https://github.com/lud2k/react-form-validation">
                            GitHub
                        </a>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="content">
                        <div className="section">
                            <h2>
                                Introduction
                            </h2>
                            <p>
                                /!\ Work in progress.<br />
                                <br />
                                React Form Validation is a React library that makes setting up form validation really
                                easy.
                            </p>
                        </div>
                        <div className="section">
                            <h2>
                                <a name="install" className="anchor" />
                                Install
                            </h2>
                            <h3>NPM</h3>
                            <Code>
                                npm install react-form-validation --save
                            </Code>
                            <h3>Bower</h3>
                            <Code>
                                bower install react-form-validation --save
                            </Code>
                            <h2>
                                <a name="usage" className="anchor" />
                                Usage
                            </h2>
                        </div>
                        <div className="section">
                            <h3>Browserify / Webpack</h3>
                            <p>
                                The most common usage. After installing this library, access it using <i>require</i> or <i>import</i>.
                            </p>
                            <Code mode="javascript" value={ImportCodeText} />
                            <h3>Script</h3>
                            <p>
                                This library can be used as an external script added to your web page.<br />
                                The script <i>dist/react-form-validation.js</i> exposes the classes of the library on
                                window.FormValidation. Instead of using require() you can then access the classes using
                                that object (<i>window.FormValidation.Field</i>).
                            </p>
                            <Code mode="xml">
                                {'<script type="text/javascript" src="{path_to_library}/dist/react-form-validation.js"></script>'}
                            </Code>
                        </div>
                        <div className="section">
                            <h2>
                                <a name="examples" className="anchor" />
                                Examples
                            </h2>
                            <LoginExample />
                            <RegisterExample />
                            <CustomRuleExample />
                            <CustomFieldExample />
                            <ListExample />
                        </div>
                        <div className="section">
                            <h2>
                                <a name="documentation" className="anchor" />
                                Documentation
                            </h2>
                            <h3> Classes </h3>
                            <RulesDocumentation />
                            <InstanceDocumentation />
                            <h3> Components </h3>
                            <FormDocumentation />
                            <InputDocumentation />
                            <SelectDocumentation />
                            <ErrorDocumentation />
                            <HintDocumentation />
                            <h3> Mixins </h3>
                            <ListenerMixinDocumentation />
                            <FieldMixinDocumentation />
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
