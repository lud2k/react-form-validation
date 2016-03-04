'use strict';

import React from 'react';

/**
 * Form component.
 */
export class Form extends React.Component {
    /**
     * Called when the form is submitted.
     */
    onSubmit(event) {
        // validate form, then call callback
        var result = this.props.form.validate(undefined, true);
        if (this.props.onSubmit) {
            this.props.onSubmit(event, result.valid, result.data, this.props.form);
        }

        // prevent form submission if not valid
        if (!result.valid) {
            event.preventDefault();
        }

        // scroll to error
        if (this.props.scrollToError) {
            // TODO: find first error then .scrollIntoView();
        }
    }

    /**
     * Returns the form context.
     */
    getChildContext() {
        return {
            form: this.props.form
        };
    }

    /**
     * Renders the component.
     */
    render() {
        return (
            <form {...this.props} noValidate={true} onSubmit={this.onSubmit.bind(this)}>
                {this.props.children}
            </form>
        );
    }
}

/**
 * Context types.
 */
Form.childContextTypes = {
    form: React.PropTypes.any
};
