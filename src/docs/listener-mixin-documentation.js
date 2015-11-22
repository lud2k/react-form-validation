
/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'ListenerMixinDocumentation',

    /**
     * Renders the form.
     */
    render: function() {
        return (
            <div className="documentation">
                <h2> Listener Mixin </h2>
                <div className="paragraph">
                    The <i>ListenerMixin</i> allows you to get notified about form events.<br />
                    <br />
                    The following functions can be impletemented:<br />
                    - formDidValidate: Called after the form was validated.
                </div>
            </div>
        );
    }
});
