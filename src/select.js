'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Field } from './field.js';
import { Utils } from './utils.js';

export class Select extends Field {
    /**
     * Returns the value of the input.
     */
    getValue() {
        return this.refs.input.value;
    }

    /**
     * Called when the component is updated.
     */
    componentDidUpdate(prevProps) {
        // is the value forced and it was changed?
        if (prevProps.hasOwnProperty('value') && this.props.value != prevProps.value) {
            super.validateField(false);
        }
    }

    /**
     * Called when the value of the input has changed.
     */
    onChange(event) {
        // is value forced?
        if (!this.props.hasOwnProperty('value')) {
            super.validateField(false);
        }

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
     * Returns the component's className.
     */
    rootClassName(fieldState) {
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
    }

    /**
     * Renders the select.
     */
    render() {
        var form = Utils.getForm(this),
            fieldState = form.getFieldState(this);

        return (
            <select {...this.props} ref="input" context={null}
                    id={this.props.name + '-field'}
                    className={this.rootClassName(fieldState)}
                    onChange={this.onChange.bind(this)}
                    onBlur={this.onBlur.bind(this)}>
                {this.props.children}
            </select>
        );
    }
}

/**
 * Properties type.
 */
Select.propTypes = {
    context: React.PropTypes.any,
    name: React.PropTypes.string.isRequired
};

/**
 * Context types.
 */
Select.contextTypes = {
    form: React.PropTypes.any
};
