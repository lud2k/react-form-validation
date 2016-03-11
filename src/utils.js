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
        if (component.props && component.props.context) {
            return component.props.context;
        } else if (component.context && component.context.form) {
            return component.context.form;
        } else {
            console.error('Could not find form context. The component might not be in a <Form> ' +
                'or might have a wrong form property', component);
        }
    }

    /**
     * Scrolls to the first error in the given element.
     * @param ele element to find th error in.
     * @param padding spacing minimum with the window edge.
     */
    static scrollToFirstError(ele, padding) {
        var errorEle = ele.querySelector('.error');
        if (errorEle) {
            var bounds = errorEle.getBoundingClientRect(),
                visible = bounds.top > padding && bounds.top < window.innerHeight - padding;
            if (!visible) {
                window.scrollBy(0,  bounds.top - padding);
            }
        }
    }
}
