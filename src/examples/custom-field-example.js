
var CustomFieldForm = require('./custom-field-form.js'),
    CustomFieldFormTxt = require('./custom-field-form.txt'),
    Code = require('../code.js');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'CustomFieldExample',

    /**
     * Renders the form.
     */
    render: function() {
        return (
            <div className="example">
                <h3>Example 4: Custom Field</h3>
                <div className="code-preview">
                    <div className="preview">
                        <CustomFieldForm />
                    </div>
                    <Code value={CustomFieldFormTxt} />
                </div>
            </div>
        );
    }
});
