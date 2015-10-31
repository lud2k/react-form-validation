
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
                <h4>Field Mixin</h4>
                <p>
                    The <i>FieldMixin</i> makes it a bit easier to create a custom field.<br />
                    <br />
                    The following functions needs to be implemented:<br />
                    - getValue: Called when the field is being validated. This method should return the value of the field.
                </p>
            </div>
        );
    }
});
