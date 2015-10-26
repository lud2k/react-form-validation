'use strict';

var CustomRuleForm = require('./custom-rule-form.js'),
    CustomRuleFormTxt = require('./custom-rule-form.txt');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'CustomRuleExample',

    /**
     * Called when the component is mounted.
     */
    componentDidMount: function componentDidMount() {
        // render code
        var doc = CodeMirror(React.findDOMNode(this.refs.code), {
            value: CustomRuleFormTxt.trim(),
            mode: 'javascript',
            readOnly: true
        });
        doc.markText({ line: 20 }, { line: 26 }, { css: 'background-color: #FFF2B0' });
        doc.markText({ line: 33 }, { line: 45 }, { css: 'background-color: #FFF2B0' });
    },

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
                React.createElement('div', { className: 'code', ref: 'code' })
            )
        );
    }
});