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
        var element = ReactDOM.findDOMNode(this);
        return element.value;
    }

    /**
     * Called when the value of the input has changed.
     */
    onChange() {
        super.validateField(true);
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
            <select {...this.props} className={this.rootClassName(fieldState)}
                    onChange={this.onChange.bind(this)} onBlur={this.onBlur.bind(this)}>
                {this.props.children}
            </select>
        );
    }
}

/**
 * Properties type.
 */
Select.propTypes = {
    form: React.PropTypes.any,
    name: React.PropTypes.string.isRequired
};

/**
 * Context types.
 */
Select.contextTypes = {
    form: React.PropTypes.any
};
