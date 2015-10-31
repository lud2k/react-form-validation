
var ListForm = require('./list-form.js'),
    ListFormTxt = require('./list-form.txt'),
    Code = require('../code.js');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'ListExample',

    /**
     * Renders the form.
     */
    render: function() {
        return (
            <div className="example">
                <h3>Example 5: List</h3>
                <div className="code-preview">
                    <div className="preview">
                        <ListForm />
                    </div>
                    <Code value={ListFormTxt} />
                </div>
            </div>
        );
    }
});
