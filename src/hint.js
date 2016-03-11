'use strict';

import React from 'react';
import { Utils } from './utils.js';

export class Hint extends React.Component {
    /**
     * Constructor
     */
    constructor(props, context) {
        super(props, context);
        var form = Utils.getForm(this);
        this.state = {
            state: form.getFieldStateByName(this.props.htmlFor),
            display: this.parseDisplayString(this.props.display)
        };
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
     * Called when the component's props have changed.
     */
    componentWillReceiveProps(newProps) {
        if (newProps.display !== this.props.display) {
            this.setState({
                display: this.parseDisplayString(newProps.display)
            });
        }
    }

    /**
     * Converts the display property to an object.
     */
    parseDisplayString(display) {
        var ret = {};
        (display || '').split(/[\|,]/).forEach(function(item) {
            ret[item] = true;
        });
        return ret;
    }

    /**
     * Called by the listener mixin when the form is validated.
     */
    formDidValidate(result) {
        var form = Utils.getForm(this);
        this.setState({
            state: form.getFieldStateByName(this.props.htmlFor)
        });
    }

    /**
     * Returns the htmlFor attribute.
     */
    htmlForAttribute() {
        return this.props.htmlFor + '-field';
    }

    /**
     * Renders the input.
     */
    render() {
        var display = this.state.display,
            state = this.state.state;
        if ((display.error && state.valid === false) ||
                (display.pristine && state.validated !== true) ||
                (display.valid && state.valid === true)) {
            return (
                <label className="hint" {...this.props}
                       htmlFor={this.htmlForAttribute()}
                       context={null}>
                    {this.props.text || this.props.children}
                </label>
            );
        } else {
            return null;
        }
    }
}

/**
 * Properties type.
 */
Hint.propTypes = {
    display: React.PropTypes.string,
    text: React.PropTypes.string,
    context: React.PropTypes.any,
    htmlFor: React.PropTypes.string.isRequired
};

/**
 * The default props.
 */
Hint.defaultProps = {
    display: 'pristine|valid'
};

/**
 * Context types.
 */
Hint.contextTypes = {
    form: React.PropTypes.any
};
