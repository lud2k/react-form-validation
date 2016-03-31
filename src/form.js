'use strict';

import React from 'react';
import { Utils } from './utils.js';

/**
 * Form component.
 */
export class Form extends React.Component {
    /**
     * Called when the form is submitted.
     */
    onSubmit(event) {
        // validate form, then call callback
        var result = this.props.context.validate(undefined, true);
        if (this.props.onSubmit) {
            this.props.onSubmit(event, result.valid, result.data, this.props.context);
        }

        // prevent form submission if not valid
        if (!result.valid || this.props.preventSubmit) {
            event.preventDefault();
        }

        // scroll to error
        if (this.props.scrollToError !== false) {
            Utils.scrollToFirstError(this.refs.form, this.props.scrollToErrorPadding || 20);
        }
    }

    /**
     * Returns the form context.
     */
    getChildContext() {
        return {
            form: this.props.context
        };
    }

    /**
     * Renders the component.
     */
    render() {
        return (
            <form {...this.props} noValidate={true} context={null} ref="form"
                  onSubmit={this.onSubmit.bind(this)}>
                {this.props.children}
            </form>
        );
    }
}

/**
 * Properties type.
 */
Form.propTypes = {
    context: React.PropTypes.any.isRequired,
    preventSubmit: React.PropTypes.bool
};

/**
 * Context types.
 */
Form.childContextTypes = {
    form: React.PropTypes.any
};
