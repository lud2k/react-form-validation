
var Code = require('../code.js'),
    FormTag = require('./form-tag.html');

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
                <h4>Form Component</h4>
                <p>
                    The <i>Form</i> component behaves the same way as the form html tag.
                </p>
                <Code value={FormTag} />
            </div>
        );
    }
});
