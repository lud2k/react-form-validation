
var Code = require('../code.js'),
    ErrorTag = require('./error-tag.html');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'ErrorDocumentation',

    /**
     * Renders the form.
     */
    render: function() {
        return (
            <div className="documentation">
                <h2> &lt;Error&gt; Component </h2>
                <div className="paragraph">
                    The <i>Error</i> component displays errors for a given field
                </div>
                <Code value={ErrorTag} />
            </div>
        );
    }
});
