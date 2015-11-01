'use strict';

var React = require('react');

/**
 * Form component.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Form',

    /**
     * Properties type.
     */
    propTypes: {
        form: React.PropTypes.any.isRequired
    },

    /**
     * Called when the form is submitted.
     */
    onSubmit: function onSubmit(event) {
        event.preventDefault();

        // validate form, then call callback
        var result = this.props.form.validate(undefined, true);
        if (this.props.onSubmit) {
            this.props.onSubmit(result.valid, result.data, this.props.form);
        }

        // scroll to error
        if (this.props.scrollToError) {
            // TODO: find first error then .scrollIntoView();
        }
    },

    /**
     * Renders the component.
     */
    render: function render() {
        return React.createElement(
            'form',
            { className: this.props.className, noValidate: true, onSubmit: this.onSubmit },
            this.props.children
        );
    }
});

module.exports.Form = require('./form.js');
module.exports.Instance = require('./instance.js');
module.exports.Input = require('./input.js');
module.exports.Error = require('./error.js');
module.exports.FieldMixin = require('./field-mixin.js');
module.exports.Rules = require('./rules.js');
module.exports.Select = require('./select.js');
module.exports.ListenerMixin = require('./listener-mixin.js');