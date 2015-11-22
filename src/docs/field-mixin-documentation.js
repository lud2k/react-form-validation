
/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'FieldMixinDocumentation',

    /**
     * Renders the form.
     */
    render: function() {
        return (
            <div className="documentation">
                <h2> Field Mixin </h2>
                <div className="paragraph">
                    The <i>FieldMixin</i> makes it a bit easier to create a custom field.<br />
                    <br />
                    The following functions needs to be implemented:<br />
                    - getValue: Called when the field is being validated. This method should return the value of the field.
                </div>
            </div>
        );
    }
});