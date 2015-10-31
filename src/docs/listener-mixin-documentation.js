
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
                <h4>Listener Mixin</h4>
                <p>
                    The <i>ListenerMixin</i> allows you to get notified about form events.<br />
                    <br />
                    The following functions can be impletemented:<br />
                    - formDidValidate: Called after the form was validated.
                </p>
            </div>
        );
    }
});
