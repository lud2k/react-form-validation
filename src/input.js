'use strict';

var React = require('react'),
    ReactDOM = require('react-dom'),
    FieldMixin = require('./field-mixin.js'),
    ListenerMixin = require('./listener-mixin.js');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Input',

    /**
     * Mixins.
     */
    mixins: [FieldMixin, ListenerMixin],

    /**
     * Properties type.
     */
    propTypes: {
        form: React.PropTypes.any.isRequired,
        name: React.PropTypes.string.isRequired
    },

    /**
     * Called to check if the field is checked.
     */
    isChecked: function() {
        var type = this.props.type;
        if (type === 'checkbox' || type === 'radio') {
            var element = ReactDOM.findDOMNode(this);
            return element.checked;
        }
    },

    /**
     * Called to check if the field is a list.
     */
    isList: function() {
        var type = this.props.type;
        return type === 'checkbox';
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
    onChange: function(event) {
        this.validateField();

        // call parent prop
        if (this.props.onChange) {
            this.props.onChange(event);
        }
    },

    /**
     * Called when the field looses focus.
     * This forces validation of the field.
     */
    onBlur: function() {
        this.validateField(true);

        // call parent prop
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    },

    /**
     * Called by the listener mixin after the form is validated.
     */
    formDidValidate: function() {
        // TODO: implement getting the field state
    },

    /**
     * Returns the component's className.
     */
    className: function(fieldState) {
        var ret = [];
        if (this.props.className) {
            ret.push(this.props.className);
        }
        if (fieldState.validated !== true) {
            ret.push('pristine');
        }
        if (fieldState.valid === false) {
            ret.push('error');
        }
        return ret.join(' ');
    },

    /**
     * Renders the input.
     */
    render: function() {
        var fieldState = this.props.form.getFieldState(this);
        return <input {...this.props} className={this.className(fieldState)}
            onChange={this.onChange} onBlur={this.onBlur} form={null} />;
    }

});
