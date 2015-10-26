'use strict';

/**
 * This mixin registers the component as a field in the parent form.
 *
 * Required props:
 *   - form, the form owning the component
 *   - name, the name of this component in the form.
 *
 * Optional props:
 *   - rules, rules to apply for the component. will override the rules given to the form.
 *
 * Required methods:
 *   - getValue(), should return the value of the current component.
 */
module.exports = {
    /**
     * When the component will mount register it in the form.
     */
    componentWillMount: function componentWillMount() {
        if (this.props.form) {
            this.props.form.register(this);
        }
    },

    /**
     * When the component is removed, unregister it from the form.
     */
    componentWillUnmount: function componentWillUnmount() {
        if (this.props.form) {
            this.props.form.unregister(this);
        }
    },

    /**
     * Can be called to tell the form that the component's value has changed.
     */
    validateField: function validateField(force) {
        if (this.props.form) {
            this.props.form.validate(this, force);
        }
    }
};