
var Code = require('../code.js'),
    FormTag = require('./form-tag.html');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'FormDocumentation',

    /**
     * Renders the form.
     */
    render: function() {
        return (
            <div className="documentation">
                <h2> &lt;Form&gt; Component </h2>
                <div className="paragraph">
                    The <i>Form</i> component behaves the same way as the form html tag.
                </div>
                <Code value={FormTag} />
            </div>
        );
    }
});
