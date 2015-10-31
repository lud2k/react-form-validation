
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
                <h4>Input Component</h4>
                <p>
                    The <i>Rules</i> class is used by this library in order to validate field values.<br />
                </p>
                <Code value={InputTag} />
            </div>
        );
    }
});
