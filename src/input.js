'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Field } from './field.js';
import { Utils } from './utils.js';

export class Input extends Field {
    /**
     * Called when the component is going to be mounted.
     */
    componentWillMount() {
        super.componentWillMount();

        var form = Utils.getForm(this);
        if (form) {
            form.addListener(this);
        }
    }

    /**
     * Called when the component is going to unmount.
     */
    componentWillUnmount() {
        super.componentWillUnmount();

        var form = Utils.getForm(this);
        if (form) {
            form.removeListener(this);
        }
    }

    /**
     * Called to check if the field is checked.
     */
    isChecked() {
        var type = this.props.type;
        if (type === 'checkbox' || type === 'radio') {
            var element = ReactDOM.findDOMNode(this);
            return element.checked;
        }
    }

    /**
     * Called to check if the field is a list.
     */
    isList() {
        var type = this.props.type;
        return type === 'checkbox';
    }

    /**
     * Returns the value of the input.
     */
    getValue() {
        return this.refs.input.value;
    }

    /**
     * Called when the value of the input has changed.
     */
    onChange(event) {
        super.validateField(false);

        // call parent prop
        if (this.props.onChange) {
            this.props.onChange(event);
        }
    }

    /**
     * Called when the field looses focus.
     * This forces validation of the field.
     */
    onBlur(event) {
        super.validateField(true);

        // call parent prop
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    }

    /**
     * Called by the listener mixin after the form is validated.
     */
    formDidValidate() {
        var form = Utils.getForm(this);
        this.setState({
            fieldState: form.getFieldState(this)
        });
    }

    /**
     * Returns the component's className.
     */
    className(fieldState) {
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
    }

    /**
     * Renders the input.
     */
    render() {
        var form = Utils.getForm(this),
            fieldState = form.getFieldState(this);

        return (
            <input {...this.props} ref="input" context={null}
                    id={this.props.name + '-field'}
                    className={this.className(fieldState)}
                    onChange={this.onChange.bind(this)}
                    onBlur={this.onBlur.bind(this)} />
        );
    }
}

/**
 * Properties type.
 */
Input.propTypes = {
    context: React.PropTypes.any,
    name: React.PropTypes.string.isRequired
};

/**
 * Context types.
 */
Input.contextTypes = {
    form: React.PropTypes.any
};
