'use strict';

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
    render: function render() {
        return React.createElement(
            'div',
            { className: 'example' },
            React.createElement(
                'h3',
                null,
                'Example 1: Login'
            ),
            React.createElement(
                'div',
                { className: 'code-preview' },
                React.createElement(
                    'div',
                    { className: 'preview' },
                    React.createElement(LoginForm, null)
                ),
                React.createElement(Code, { value: LoginFormTxt })
            )
        );
    }
});