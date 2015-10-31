
var Code = require('../code.js'),
    ErrorTag = require('./error-tag.html');

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
                <h4>Error Component</h4>
                <p>
                    The <i>Error</i> component displays errors for a given field
                </p>
                <Code value={ErrorTag} />
            </div>
        );
    }
});
