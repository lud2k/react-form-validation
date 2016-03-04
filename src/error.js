'use strict';

import React from 'react';
import { Utils } from './utils.js';

export class Error extends React.Component {
    /**
     * Constructor.
     */
    constructor(props, context) {
        super(props, context);
        this.state = this.getFieldState();
    }

    /**
     * Called when the component is going to be mounted.
     */
    componentWillMount() {
        var form = Utils.getForm(this);
        if (form) {
            form.addListener(this);
        }
    }

    /**
     * Called when the component is going to unmount.
     */
    componentWillUnmount() {
        var form = Utils.getForm(this);
        if (form) {
            form.removeListener(this);
        }
    }

    /**
     * Called by the listener mixin when the form is validated.
     */
    formDidValidate(result) {
        this.setState(this.getFieldState());
    }

    getFieldState() {
        var form = Utils.getForm(this),
            fieldState = form.getFieldStateByName(this.props.forName);
        return {
            error: fieldState ? fieldState.error : undefined,
            valid: fieldState ? fieldState.valid : undefined
        };
    }

    /**
     * Renders the input.
     */
    render() {
        if (this.state.valid === false) {
            return <label className="error" {...this.props} form={null}>{this.state.error}</label>;
        } else {
            return null;
        }
    }
}

/**
 * Properties type.
 */
Error.propTypes = {
    form: React.PropTypes.any,
    forName: React.PropTypes.string.isRequired
};

/**
 * Context types.
 */
Error.contextTypes = {
    form: React.PropTypes.any
};
