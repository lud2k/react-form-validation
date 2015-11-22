'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
    getValue: function getValue() {
        var element = ReactDOM.findDOMNode(this);
        return element.value;
    },

    /**
     * Called when the value of the input has changed.
     */
    onChange: function onChange() {
        this.validateField(true);
    },

    /**
     * Returns the component's className.
     */
    rootClassName: function rootClassName(fieldState) {
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
    render: function render() {
        var fieldState = this.props.form.getFieldState(this);
        return React.createElement(
            'select',
            _extends({}, this.props, { className: this.rootClassName(fieldState),
                onChange: this.onChange, onBlur: this.onBlur }),
            this.props.children
        );
    }

});