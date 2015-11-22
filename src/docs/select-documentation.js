
var Code = require('../code.js'),
    SelectTag = require('./select-tag.html');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'RulesDocumentation',

    /**
     * Renders the form.
     */
    render: function() {
        return (
            <div className="documentation">
                <h2> &lt;Select&gt; Component </h2>
                <div className="paragraph">
                    The <i>Select</i> component behaves the same way as the select html tag.
                </div>
                <Code value={SelectTag} />
            </div>
        );
    }
});
