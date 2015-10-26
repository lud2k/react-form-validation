'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
     * Properties type.
     */
    propTypes: {
        form: React.PropTypes.any.isRequired,
        forName: React.PropTypes.string.isRequired
    },

    /**
     * Returns the initial state of the component.
     */
    getInitialState: function getInitialState() {
        return this.getFieldState();
    },

    /**
     * Called by the listener mixin when the form is validated.
     */
    formDidValidate: function formDidValidate(result) {
        this.setState(this.getFieldState());
    },

    getFieldState: function getFieldState() {
        var fieldState = this.props.form.getFieldStateByName(this.props.forName);
        return {
            error: fieldState ? fieldState.error : undefined,
            valid: fieldState ? fieldState.valid : undefined
        };
    },

    /**
     * Renders the input.
     */
    render: function render() {
        if (this.state.valid === false) {
            return React.createElement(
                'label',
                _extends({ className: 'error' }, this.props, { form: null }),
                this.state.error
            );
        } else {
            return null;
        }
    }

});