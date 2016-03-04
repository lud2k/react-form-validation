'use strict';

import React from 'react';
import { Utils } from './utils.js';

/**
 * This Field class registers the component as a field in the parent form.
 *
 * Required props:
 *   - form, the form owning the component
 *   - name, the name of this component in the form.
 *
 * Optional props:
 *   - rules, rules to apply for the component. will override the rules given to the form.
 *
 * Required methods:
 *   - getValue(), should return the value of the current component.
 */
export class Field extends React.Component {
    /**
     * When the component will mount register it in the form.
     */
    componentWillMount() {
        var form = Utils.getForm(this);
        if (form) {
            form.register(this);
        }
    }

    /**
     * When the component is removed, unregister it from the form.
     */
    componentWillUnmount() {
        var form = Utils.getForm(this);
        if (form) {
            form.unregister(this);
        }
    }

    /**
     * Can be called to tell the form that the component's value has changed.
     */
    validateField(force) {
        var form = Utils.getForm(this);
        if (form) {
            form.validate(this, force);
        }
    }
}

/**
 * Context types.
 */
Field.contextTypes = {
    form: React.PropTypes.any
};
