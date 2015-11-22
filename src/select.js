'use strict';

var React = require('react'),
    ReactDOM = require('react-dom'),
    FieldMixin = require('./field-mixin.js');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Select',

    /**
     * Mixins.
     */
    mixins: [FieldMixin],

    /**
     * Properties type.
     */
    propTypes: {
        form: React.PropTypes.any.isRequired,
        name: React.PropTypes.string.isRequired
    },

    /**
     * Returns the value of the input.
     */
    getValue: function() {
        var element = ReactDOM.findDOMNode(this);
        return element.value;
    },

    /**
     * Called when the value of the input has changed.
     */
    onChange: function() {
        this.validateField(true);
    },

    /**
     * Returns the component's className.
     */
    rootClassName: function(fieldState) {
        var ret = [];
        if (this.props.className) {
            ret.push(this.props.className);
        }
        if (fieldState.pristine) {
            ret.push('pristine');
        }
        if (!fieldState.valid) {
            ret.push('error');
        }
        return ret.join(' ');
    },

    /**
     * Renders the select.
     */
    render: function() {
        var fieldState = this.props.form.getFieldState(this);
        return (
            <select {...this.props} className={this.rootClassName(fieldState)}
                    onChange={this.onChange} onBlur={this.onBlur}>
                {this.props.children}
            </select>
        );
    }

});
