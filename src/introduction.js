
import Code from './code.js';
import React from 'react';
import ComponentSource from './component-source.js';
import RegisterForm from './examples/register/register-form.js';
import RegisterFormText from './examples/register/register-form.txt';
import BirthDateFieldText from './examples/register/birthdate-field.txt';

/**
 * The main page of the website.
 */
export default class Introduction extends React.Component {
    /**
     * Renders the form.
     */
    render() {
        var sources = [{
            name: 'register-form.jsx',
            code: RegisterFormText
        },{
            name: 'birthdate-field.jsx',
            code: BirthDateFieldText
        }];

        return (
            <div id="introduction" className="content">
                <div className="section">
                    <h2> Introduction </h2>
                    <p>
                        This is a form validation library for React.
                    </p>
                    <div className="features">
                        <div className="feature">
                            <h4>Easy to use</h4>
                            <p>
                                Seting up this library is really easy.<br />
                                Just use the Form, Input, Select components of the library and
                                setup the rules and that's it!
                            </p>
                        </div>
                        <div className="feature">
                            <h4>Non invasive</h4>
                            <p>
                                No need to pass a million props around.
                            </p>
                        </div>
                        <div className="feature">
                            <h4>Flexible rules</h4>
                            <p>
                                The library comes with a bunch of rules but also allows you to
                                define your own rules really easily.
                            </p>
                        </div>
                        <div className="feature">
                            <h4>Extensible</h4>
                            <p>
                                Add validation to any custom component with just a few lines of
                                code.
                            </p>
                        </div>
                        <div className="feature">
                            <h4>Easy data access</h4>
                            <p>
                                Get the form data as a nice javascript object. No need to manually
                                retrieve the values.
                            </p>
                        </div>
                        <div className="feature">
                            <h4>Errors & hints</h4>
                            <p>
                                Comes with some components to show errors and hints.
                            </p>
                        </div>
                        <div className="feature">
                            <h4>React 14 + ES6</h4>
                            <p>
                                Works great with React 14 using es6 classes.
                                Does not depend on any other library.
                            </p>
                        </div>
                        <div className="feature">
                            <h4>I18n Support</h4>
                            <p>
                                All error messages can be customized.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <h2> Example </h2>
                    <p>
                        <ComponentSource component={RegisterForm} sources={sources} />
                    </p>
                </div>
            </div>
        );
    }
}
