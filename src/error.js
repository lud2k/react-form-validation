'use strict';

var React = require('react'),
    ListenerMixin = require('./listener-mixin.js');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Error',

    /**
     * Mixins
     */
    mixins: [ListenerMixin],

    /**
     * Returns the initial state of the component.
     */
    getInitialState: function() {
        return this.getFieldState();
    },

    /**
     * Called by the listener mixin when the form is validated.
     */
    formDidValidate: function(result) {
        this.setState(this.getFieldState());
    },

    getFieldState: function() {
        var fieldState = this.props.form.getFieldStateByName(this.props.forName);
        return {
            error: fieldState ? fieldState.error : undefined,
            valid: fieldState ? fieldState.valid : undefined
        };
    },

    /**
     * Renders the input.
     */
    render: function() {
        if (this.state.valid === false) {
            return <label className="error" {...this.props} form={null}>{this.state.error}</label>;
        } else {
            return null;
        }
    }

});
