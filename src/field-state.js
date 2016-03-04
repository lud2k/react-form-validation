'use strict';

/**
 * Field class.
 * Represents a field stored in the form context.
 */
export class FieldState {
    constructor(component, state) {
        this.component = component;
        this.state = state;
    }

    /**
     * Returns the name of this field.
     */
    getName() {
        return this.component.props.name;
    }

    /**
     * Returns the component.
     */
    getComponent() {
        return this.component;
    }

    /**
     * Returns the rules specified on the component.
     */
    getRules() {
        return this.component.props.rules;
    }

    /**
     * Returns a field's state.
     */
    getState() {
        return this.state;
    }
}
