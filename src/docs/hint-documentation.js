
var Code = require('../code.js'),
    HintTag = require('./hint-tag.html');

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
                <h4>Hint Component</h4>
                <p>
                    The <i>Hint</i> component displays a hint depending on the state of a field.
                </p>
                <Code value={HintTag} />
            </div>
        );
    }
});
