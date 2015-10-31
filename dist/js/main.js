'use strict';

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
                        { className: 'link', href: '#install' },
                        'Install'
                    ),
                    React.createElement(
                        'a',
                        { className: 'link', href: '#usage' },
                        'Usage'
                    ),
                    React.createElement(
                        'a',
                        { className: 'link', href: '#examples' },
                        'Examples'
                    ),
                    React.createElement(
                        'a',
                        { className: 'link', href: '#documentation' },
                        'Documentation'
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
                            'Introduction'
                        ),
                        React.createElement(
                            'p',
                            null,
                            '/!\\ Work in progress.',
                            React.createElement('br', null),
                            React.createElement('br', null),
                            'React Form Validation is a React library that makes setting up form validation really easy.'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'section' },
                        React.createElement(
                            'h2',
                            null,
                            React.createElement('a', { name: 'install', className: 'anchor' }),
                            'Install'
                        ),
                        React.createElement(
                            'h3',
                            null,
                            'NPM'
                        ),
                        React.createElement(
                            Code,
                            null,
                            'npm install react-form-validation --save'
                        ),
                        React.createElement(
                            'h3',
                            null,
                            'Bower'
                        ),
                        React.createElement(
                            Code,
                            null,
                            'bower install react-form-validation --save'
                        ),
                        React.createElement(
                            'h2',
                            null,
                            React.createElement('a', { name: 'usage', className: 'anchor' }),
                            'Usage'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'section' },
                        React.createElement(
                            'h3',
                            null,
                            'Browserify / Webpack'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'The most common usage. After installing this library, access it using ',
                            React.createElement(
                                'i',
                                null,
                                'require'
                            ),
                            ' or ',
                            React.createElement(
                                'i',
                                null,
                                'import'
                            ),
                            '.'
                        ),
                        React.createElement(Code, { mode: 'javascript', value: ImportCodeText }),
                        React.createElement(
                            'h3',
                            null,
                            'Script'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'This library can be used as an external script added to your web page.',
                            React.createElement('br', null),
                            'The script ',
                            React.createElement(
                                'i',
                                null,
                                'dist/react-form-validation.js'
                            ),
                            ' exposes the classes of the library on window.FormValidation. Instead of using require() you can then access the classes using that object (',
                            React.createElement(
                                'i',
                                null,
                                'window.FormValidation.Field'
                            ),
                            ').'
                        ),
                        React.createElement(
                            Code,
                            { mode: 'xml' },
                            '<script type="text/javascript" src="{path_to_library}/dist/react-form-validation.js"></script>'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'section' },
                        React.createElement(
                            'h2',
                            null,
                            React.createElement('a', { name: 'examples', className: 'anchor' }),
                            'Examples'
                        ),
                        React.createElement(LoginExample, null),
                        React.createElement(RegisterExample, null),
                        React.createElement(CustomRuleExample, null),
                        React.createElement(CustomFieldExample, null),
                        React.createElement(ListExample, null)
                    ),
                    React.createElement(
                        'div',
                        { className: 'section' },
                        React.createElement(
                            'h2',
                            null,
                            React.createElement('a', { name: 'documentation', className: 'anchor' }),
                            'Documentation'
                        ),
                        React.createElement(
                            'h3',
                            null,
                            ' Classes '
                        ),
                        React.createElement(RulesDocumentation, null),
                        React.createElement(InstanceDocumentation, null),
                        React.createElement(
                            'h3',
                            null,
                            ' Components '
                        ),
                        React.createElement(FormDocumentation, null),
                        React.createElement(InputDocumentation, null),
                        React.createElement(SelectDocumentation, null),
                        React.createElement(ErrorDocumentation, null),
                        React.createElement(HintDocumentation, null),
                        React.createElement(
                            'h3',
                            null,
                            ' Mixins '
                        ),
                        React.createElement(ListenerMixinDocumentation, null),
                        React.createElement(FieldMixinDocumentation, null)
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