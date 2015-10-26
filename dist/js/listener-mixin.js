'use strict';

/**
 * This mixin registers the component as a listener in the parent form.
 *
 * Required props:
 *   - form, the form owning the component
 *
 * The following functions can be implement:
 *   - formDidValidate
 */
module.exports = {
    /**
     * When the component will mount register it in the form.
     */
    componentWillMount: function componentWillMount() {
        if (this.props.form) {
            this.props.form.addListener(this);
        }
    },

    /**
     * When the component is removed, unregister it from the form.
     */
    componentWillUnmount: function componentWillUnmount() {
        if (this.props.form) {
            this.props.form.removeListener(this);
        }
    }
};