'use strict';

var CustomRuleForm = require('./custom-rule-form.js'),
    CustomRuleFormTxt = require('./custom-rule-form.txt'),
    Code = require('../code.js');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'CustomRuleExample',

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
                'Example 3: Custom Rule'
            ),
            React.createElement(
                'div',
                { className: 'code-preview' },
                React.createElement(
                    'div',
                    { className: 'preview' },
                    React.createElement(CustomRuleForm, null)
                ),
                React.createElement(Code, { value: CustomRuleFormTxt })
            )
        );
    }
});