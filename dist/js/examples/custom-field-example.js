'use strict';

var CustomFieldForm = require('./custom-field-form.js'),
    CustomFieldFormTxt = require('./custom-field-form.txt'),
    Code = require('../code.js');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'CustomFieldExample',

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
                'Example 4: Custom Field'
            ),
            React.createElement(
                'div',
                { className: 'code-preview' },
                React.createElement(
                    'div',
                    { className: 'preview' },
                    React.createElement(CustomFieldForm, null)
                ),
                React.createElement(Code, { value: CustomFieldFormTxt })
            )
        );
    }
});