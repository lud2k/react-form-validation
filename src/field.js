'use strict';

/**
 * Field class.
 * Represents a field stored in the form instance.
 */
var Field = function(component, part, state) {
    this.component = component;
    this.part = part;
    this.state = state;
};

/**
 * Returns the name of this field.
 */
Field.prototype.getName = function() {
    return this.component.props.name;
};

/**
 * Returns the component.
 */
Field.prototype.getComponent = function() {
    return this.component;
};

/**
 * Returns the rules specified on the component.
 */
Field.prototype.getRules = function() {
    return this.component.props.rules;
};

/**
 * Returns the path of this field.
 */
Field.prototype.getPath = function() {
    var part = this.part,
        ret = [];
    while (part) {
        if (part.key !== undefined) {
            ret.splice(0, 0, part.name + '[' + part.key + ']');
        } else {
            ret.splice(0, 0, part.name);
        }
        part = part.parent;
    }
    return ret.join('.');
};

/**
 * Returns the full name of this field.
 */
Field.prototype.getFullName = function() {
    var path = this.getPath();
    return path ? path + '.' + this.getName() : this.getName();
};

/**
 * Returns a field's state.
 */
Field.prototype.getState = function() {
    return this.state;
};

module.exports = Field;
