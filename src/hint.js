'use strict';

var React = require('react'),
    ListenerMixin = require('./listener-mixin.js');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Hint',

    /**
     * Mixins
     */
    mixins: [ListenerMixin],

    /**
     * Properties type.
     */
    propTypes: {
        display: React.PropTypes.string,
        text: React.PropTypes.string,
        form: React.PropTypes.any.isRequired,
        forName: React.PropTypes.string.isRequired
    },

    /**
     * Returns the default props.
     */
    getDefaultProps: function() {
        return {
            display: 'pristine|valid'
        };
    },

    /**
     * Returns the initial state of the component.
     */
    getInitialState: function() {
        return {
            state: this.props.form.getFieldStateByName(this.props.forName),
            display: this.parseDisplayString(this.props.display)
        };
    },

    /**
     * Called when the component's props have changed.
     */
    componentWillReceiveProps: function(newProps) {
        if (newProps.display !== this.props.display) {
            this.setState({
                display: this.parseDisplayString(newProps.display)
            });
        }
    },

    /**
     * Converts the display property to an object.
     */
    parseDisplayString: function(display) {
        var ret = {};
        (display || '').split(/[\|,]/).forEach(function(item) {
            ret[item] = true;
        });
        return ret;
    },

    /**
     * Called by the listener mixin when the form is validated.
     */
    formDidValidate: function(result) {
        this.setState({
            state: this.props.form.getFieldStateByName(this.props.forName)
        });
    },

    /**
     * Renders the input.
     */
    render: function() {
        var display = this.state.display,
            state = this.state.state;
        if ((display.error && state.valid === false) ||
                (display.pristine && state.validated !== true) ||
                (display.valid && state.valid === true)) {
            return (
                <label className="hint" {...this.props} form={null}>
                    {this.props.text || this.props.children}
                </label>
            );
        } else {
            return null;
        }
    }

});
