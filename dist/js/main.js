'use strict';

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
    render: function render() {
        return React.createElement(
            'div',
            { id: 'main' },
            React.createElement(
                'div',
                { className: 'header-wrapper' },
                React.createElement(
                    'div',
                    { className: 'header' },
                    React.createElement(
                        'a',
                        { className: 'logo', href: '#' },
                        React.createElement('img', { src: 'logo.svg' }),
                        'React Form Validation'
                    ),
                    React.createElement(
                        'a',
                        { className: 'link', href: '#download' },
                        'Install'
                    ),
                    React.createElement(
                        'a',
                        { className: 'link', href: '#docs' },
                        'Documentation'
                    ),
                    React.createElement(
                        'a',
                        { className: 'link', href: '#docs' },
                        'Examples'
                    ),
                    React.createElement(
                        'a',
                        { className: 'link', href: 'https://github.com/lud2k/react-form-validation' },
                        'GitHub'
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'content-wrapper' },
                React.createElement(
                    'div',
                    { className: 'content' },
                    React.createElement(
                        'div',
                        { className: 'section' },
                        React.createElement(
                            'h2',
                            null,
                            'Install'
                        ),
                        React.createElement(
                            'h3',
                            null,
                            'NPM'
                        ),
                        React.createElement(
                            'div',
                            { className: 'code' },
                            'npm install react-form-validation --save'
                        ),
                        React.createElement(
                            'h3',
                            null,
                            'Bower'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'This library can be used as an external javascript library. You can use Bower to download it'
                        ),
                        React.createElement(
                            'div',
                            { className: 'code' },
                            'bower install react-form-validation --save'
                        ),
                        React.createElement(
                            'h2',
                            null,
                            'Usage'
                        ),
                        React.createElement(
                            'h3',
                            null,
                            'Browserify'
                        ),
                        React.createElement(
                            'h3',
                            null,
                            'Script'
                        ),
                        React.createElement(
                            'div',
                            { className: 'code' },
                            '<script type="text/javascript" src="react-form-validation.js"></script>'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'section' },
                        React.createElement(
                            'h2',
                            null,
                            'Examples'
                        ),
                        React.createElement(LoginExample, null),
                        React.createElement(RegisterExample, null),
                        React.createElement(CustomRuleExample, null),
                        React.createElement(CustomFieldExample, null),
                        React.createElement(ListExample, null)
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'footer-wrapper' },
                React.createElement(
                    'div',
                    { className: 'footer' },
                    'Created by ',
                    React.createElement(
                        'a',
                        { href: 'https://github.com/lud2k' },
                        'Ludovic Cabre'
                    )
                )
            )
        );
    }
});