
import ImportCodeText from './import.code.txt';
import Code from './code.js';
import React from 'react';

/**
 * The main page of the website.
 */
export default class Install extends React.Component {
    /**
     * Renders the form.
     */
    render() {
        return (
            <div id="install" className="content">
                <div className="section">
                    <h2> Introduction </h2>
                    /!\ Work in progress.<br />
                    Feedback always appreciated.
                </div>
                <div className="section">
                    <h2> Install </h2>
                    <h3> NPM </h3>
                    <Code>
                        npm install react-form-validation --save
                    </Code>
                    <h3> Bower </h3>
                    <Code>
                        bower install react-form-validation --save
                    </Code>
                    <h2> Usage </h2>
                </div>
                <div className="section">
                    <h3> Browserify / Webpack </h3>
                    <p>
                        The most common usage. After installing this library, access it using <i>require</i> or <i>import</i>.
                    </p>
                    <Code mode="javascript" value={ImportCodeText} />
                    <h3> Script </h3>
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
            </div>
        );
    }
}
