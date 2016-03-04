'use strict';

/**
 * Utils class.
 * A bunch of reusable static functions.
 */
export class Utils {
    /**
     * Retrieves the form for a component.
     * The form can be given either using props or context.
     */
    static getForm(component) {
        if (component.props && component.props.form) {
            return component.props.form;
        } else if (component.context && component.context.form) {
            return component.context.form;
        } else {
            console.error('Could not find form context. The component might not be in a <Form> ' +
                'or might have a wrong form property', component);
        }
    }
}
