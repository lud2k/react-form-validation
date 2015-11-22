
var Code = require('../code.js'),
    InputTag = require('./input-tag.html');

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
                <h2> &lt;Input&gt; Component </h2>
                <div className="paragraph">
                    The <i>Rules</i> class is used by this library in order to validate field values.
                </div>
                <Code value={InputTag} />
            </div>
        );
    }
});
