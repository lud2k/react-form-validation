
var Code = require('../code.js'),
    HintTag = require('./hint-tag.html');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'HintDocumentation',

    /**
     * Renders the form.
     */
    render: function() {
        return (
            <div className="documentation">
                <h2> &lt;Hint&gt; Component </h2>
                <div className="paragraph">
                    The <i>Hint</i> component displays a hint depending on the state of a field.
                </div>
                <Code value={HintTag} />
            </div>
        );
    }
});
