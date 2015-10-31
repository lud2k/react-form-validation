(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

/**
 * The main page of the website.
 */
'use strict';

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Code',

    /**
     * Returns the default properties.
     */
    getDefaultProps: function getDefaultProps() {
        return {
            mode: 'javascript'

        };
    },

    /**
     * Called when the component is mounted.
     */
    componentDidMount: function componentDidMount() {
        var ele = React.findDOMNode(this),
            value = this.props.value;
        if (!value && this.props.children) {
            if (this.props.children.map) {
                value = this.props.children.map(function (child) {
                    return child.toString();
                }).join('');
            } else {
                value = this.props.children;
            }
        }

        try {
            // render code
            var doc = CodeMirror(ele, {
                value: value.trim(),
                mode: this.props.mode,
                readOnly: true
            });

            if (this.props.highlight) {
                this.props.highlight.forEach(function (item) {
                    doc.markText({ line: item.from }, { line: item.to }, { css: 'background-color: #FFF2B0' });
                });
            }
        } catch (e) {
            console.error('failed to render code', this);
        }
    },

    /**
     * Renders an empty div in which CodeMirror will render pretty code.
     */
    render: function render() {
        return React.createElement('div', { className: 'code' });
    }
});

},{}],2:[function(require,module,exports){
'use strict';

var Code = require('../code.js'),
    ErrorTag = require('./error-tag.html');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'RulesDocumentation',

    /**
     * Renders the form.
     */
    render: function render() {
        return React.createElement('div', { className: 'documentation' }, React.createElement('h4', null, 'Error Component'), React.createElement('p', null, 'The ', React.createElement('i', null, 'Error'), ' component displays errors for a given field'), React.createElement(Code, { value: ErrorTag }));
    }
});

},{"../code.js":1,"./error-tag.html":3}],3:[function(require,module,exports){
module.exports = "<Error\n    name=\"field_name\"    // name of a field (required)\n    form=\"form_instance\" // form instance (required)\n    />";

},{}],4:[function(require,module,exports){

/**
 * The main page of the website.
 */
"use strict";

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'RulesDocumentation',

    /**
     * Renders the form.
     */
    render: function render() {
        return React.createElement("div", { className: "documentation" }, React.createElement("h4", null, "Field Mixin"), React.createElement("p", null, "The ", React.createElement("i", null, "FieldMixin"), " makes it a bit easier to create a custom field.", React.createElement("br", null), React.createElement("br", null), "The following functions needs to be implemented:", React.createElement("br", null), "- getValue: Called when the field is being validated. This method should return the value of the field."));
    }
});

},{}],5:[function(require,module,exports){
'use strict';

var Code = require('../code.js'),
    FormTag = require('./form-tag.html');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'RulesDocumentation',

    /**
     * Renders the form.
     */
    render: function render() {
        return React.createElement('div', { className: 'documentation' }, React.createElement('h4', null, 'Form Component'), React.createElement('p', null, 'The ', React.createElement('i', null, 'Form'), ' component behaves the same way as the form html tag.'), React.createElement(Code, { value: FormTag }));
    }
});

},{"../code.js":1,"./form-tag.html":6}],6:[function(require,module,exports){
module.exports = "<Form\n    form=\"form_instance\" // form instance (required)\n>\n    // ...\n</Form>";

},{}],7:[function(require,module,exports){
'use strict';

var Code = require('../code.js'),
    HintTag = require('./hint-tag.html');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'RulesDocumentation',

    /**
     * Renders the form.
     */
    render: function render() {
        return React.createElement('div', { className: 'documentation' }, React.createElement('h4', null, 'Hint Component'), React.createElement('p', null, 'The ', React.createElement('i', null, 'Hint'), ' component displays a hint depending on the state of a field.'), React.createElement(Code, { value: HintTag }));
    }
});

},{"../code.js":1,"./hint-tag.html":8}],8:[function(require,module,exports){
module.exports = "<Hint\n    name=\"field_name\"              // name of a field (required)\n    form=\"form_instance\"           // form instance (required)\n    text=\"text to display\"         // text to display (optional, defaults to tag's content if not set)\n    display=\"pristine|valid|error\" // when to display this hint (optional)\n>\n    html to display                // only used if the text property isn't set\n</Hint>";

},{}],9:[function(require,module,exports){
'use strict';

var Code = require('../code.js'),
    InputTag = require('./input-tag.html');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'RulesDocumentation',

    /**
     * Renders the form.
     */
    render: function render() {
        return React.createElement('div', { className: 'documentation' }, React.createElement('h4', null, 'Input Component'), React.createElement('p', null, 'The ', React.createElement('i', null, 'Rules'), ' class is used by this library in order to validate field values.', React.createElement('br', null)), React.createElement(Code, { value: InputTag }));
    }
});

},{"../code.js":1,"./input-tag.html":10}],10:[function(require,module,exports){
module.exports = "<Input\n    name=\"field_name\"    // name of a field (required)\n    form=\"form_instance\" // form instance (required)\n    />";

},{}],11:[function(require,module,exports){

/**
 * The main page of the website.
 */
"use strict";

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'RulesDocumentation',

    /**
     * Renders the form.
     */
    render: function render() {
        return React.createElement("div", { className: "documentation" }, React.createElement("h4", null, "Instance Class"), React.createElement("p", null, "TODO"));
    }
});

},{}],12:[function(require,module,exports){

/**
 * The main page of the website.
 */
"use strict";

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'RulesDocumentation',

    /**
     * Renders the form.
     */
    render: function render() {
        return React.createElement("div", { className: "documentation" }, React.createElement("h4", null, "Listener Mixin"), React.createElement("p", null, "The ", React.createElement("i", null, "ListenerMixin"), " allows you to get notified about form events.", React.createElement("br", null), React.createElement("br", null), "The following functions can be impletemented:", React.createElement("br", null), "- formDidValidate: Called after the form was validated."));
    }
});

},{}],13:[function(require,module,exports){

/**
 * The main page of the website.
 */
"use strict";

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'RulesDocumentation',

    /**
     * Renders the form.
     */
    render: function render() {
        return React.createElement("div", { className: "documentation" }, React.createElement("h4", null, "Rules Class"), React.createElement("p", null, "TODO"));
    }
});

},{}],14:[function(require,module,exports){
'use strict';

var Code = require('../code.js'),
    SelectTag = require('./select-tag.html');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'RulesDocumentation',

    /**
     * Renders the form.
     */
    render: function render() {
        return React.createElement('div', { className: 'documentation' }, React.createElement('h4', null, 'Select Component'), React.createElement('p', null, 'The ', React.createElement('i', null, 'Select'), ' component behaves the same way as the select html tag.'), React.createElement(Code, { value: SelectTag }));
    }
});

},{"../code.js":1,"./select-tag.html":15}],15:[function(require,module,exports){
module.exports = "<Select\n    name=\"field_name\"    // name of a field (required)\n    form=\"form_instance\" // form instance (required)\n    />";

},{}],16:[function(require,module,exports){
'use strict';

var CustomFieldForm = require('./custom-field-form.js'),
    CustomFieldFormTxt = require('./custom-field-form.txt'),
    Code = require('../code.js');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'CustomFieldExample',

    /**
     * Renders the form.
     */
    render: function render() {
        return React.createElement('div', { className: 'example' }, React.createElement('h3', null, 'Example 4: Custom Field'), React.createElement('div', { className: 'code-preview' }, React.createElement('div', { className: 'preview' }, React.createElement(CustomFieldForm, null)), React.createElement(Code, { value: CustomFieldFormTxt })));
    }
});

},{"../code.js":1,"./custom-field-form.js":17,"./custom-field-form.txt":18}],17:[function(require,module,exports){
"use strict";

var ReactFormValidation = require('react-form-validation'),
    Instance = ReactFormValidation.Instance,
    Error = ReactFormValidation.Error,
    Rules = ReactFormValidation.Rules,
    Form = ReactFormValidation.Form,
    Input = ReactFormValidation.Input,
    FieldMixin = ReactFormValidation.FieldMixin,
    Hint = ReactFormValidation.Hint;

var BirthdateField = React.createClass({
    displayName: "BirthdateField",

    /**
     * Make this component a "Field".
     */
    mixins: [FieldMixin],

    /**
     * Returns the value of the component.
     */
    getValue: function getValue() {
        var day = React.findDOMNode(this.refs.day).value,
            month = React.findDOMNode(this.refs.month).value,
            year = React.findDOMNode(this.refs.year).value;
        if (day && month && year) {
            return new Date(year, month, day);
        }
    },

    /**
     * Called when one of the <select> selection has changed.
     */
    onChange: function onChange() {
        this.props.form.onChange(this);
    },

    /**
     * Renders the options for the year <select>.
     */
    renderOptions: function renderOptions(label, start, end, reversed) {
        var ret = [];
        ret.push(React.createElement("option", { key: -1, value: "" }, label));
        for (var i = start; i <= end; i++) {
            var j = reversed ? end - i + start : i;
            ret.push(React.createElement("option", { key: j, value: j }, j));
        }
        return ret;
    },

    /**
     * Renders the component.
     */
    render: function render() {
        return React.createElement("span", { className: "field-group" }, React.createElement("select", { name: "day", ref: "day", onChange: this.onChange }, this.renderOptions('Day', 1, 31)), React.createElement("select", { name: "month", ref: "month", onChange: this.onChange }, this.renderOptions('Month', 1, 12)), React.createElement("select", { name: "year", ref: "year", onChange: this.onChange }, this.renderOptions('Year', new Date().getFullYear() - 100, new Date().getFullYear(), true)));
    }
});

/**
 * Simple login form.
 */
module.exports = React.createClass({
    displayName: "exports",

    /**
     * Returns the initial state of the component.
     */
    getInitialState: function getInitialState() {
        return {
            form: new Instance({
                fields: {
                    birthdate: Rules.required().minAge(13)
                }
            })
        };
    },

    /**
     * Renders the form.
     */
    render: function render() {
        var form = this.state.form;
        return React.createElement(Form, { form: form }, React.createElement("h4", null, "Custom Field"), React.createElement("div", { className: "field" }, "Birthdate: ", React.createElement(BirthdateField, { name: "birthdate", form: form }), React.createElement(Error, { forName: "birthdate", form: form }), React.createElement(Hint, { forName: "birthdate", form: form, text: "You have to be at least 13",
            display: "pristine" })), React.createElement("div", { className: "actions" }, React.createElement("button", null, "Validate")));
    }
});

},{"react-form-validation":39}],18:[function(require,module,exports){
module.exports = "\nvar ReactFormValidation = require('react-form-validation'),\n    Instance = ReactFormValidation.Instance,\n    Error = ReactFormValidation.Error,\n    Rules = ReactFormValidation.Rules,\n    Form = ReactFormValidation.Form,\n    Input = ReactFormValidation.Input,\n    FieldMixin = ReactFormValidation.FieldMixin,\n    Hint = ReactFormValidation.Hint;\n\nvar BirthdateField = React.createClass({\n    /**\n     * Make this component a \"Field\".\n     */\n    mixins: [FieldMixin],\n\n    /**\n     * Returns the value of the component.\n     */\n    getValue: function() {\n        var day = React.findDOMNode(this.refs.day).value,\n            month = React.findDOMNode(this.refs.month).value,\n            year = React.findDOMNode(this.refs.year).value;\n        if (day && month && year) {\n            return new Date(year, month, day);\n        }\n    },\n\n    /**\n     * Called when one of the <select> selection has changed.\n     */\n    onChange: function() {\n        this.props.form.onChange(this);\n    },\n\n    /**\n     * Renders the options for the year <select>.\n     */\n    renderOptions: function(label, start, end, reversed) {\n        var ret = [];\n        ret.push(<option key={-1} value=\"\">{ label }</option>);\n        for (var i=start; i<=end; i++) {\n            var j = reversed ? end - i + start : i;\n            ret.push(<option key={j} value={j}>{j}</option>);\n        }\n        return ret;\n    },\n\n    /**\n     * Renders the component.\n     */\n    render: function() {\n        return (\n            <span className=\"field-group\">\n                <select name=\"day\" ref=\"day\" onChange={this.onChange}>\n                    {this.renderOptions('Day', 1, 31)}\n                </select>\n                <select name=\"month\" ref=\"month\" onChange={this.onChange}>\n                    {this.renderOptions('Month', 1, 12)}\n                </select>\n                <select name=\"year\" ref=\"year\" onChange={this.onChange}>\n                    {this.renderOptions('Year', new Date().getFullYear()-100,\n                        new Date().getFullYear(), true)}\n                </select>\n            </span>\n        );\n    }\n});\n\n/**\n * Simple login form.\n */\nmodule.exports = React.createClass({\n    /**\n     * Returns the initial state of the component.\n     */\n    getInitialState: function() {\n        return {\n            form: new Instance({\n                fields: {\n                    birthdate: Rules.required().minAge(13)\n                }\n            })\n        };\n    },\n\n    /**\n     * Renders the form.\n     */\n    render: function() {\n        var form = this.state.form;\n        return (\n            <Form form={form}>\n                <h4>Custom Field</h4>\n                <div className=\"field\">\n                    Birthdate: <BirthdateField name=\"birthdate\" form={form} />\n                    <Error forName=\"birthdate\" form={form} />\n                    <Hint forName=\"birthdate\" form={form} text=\"You have to be at least 13\"\n                        display=\"pristine\" />\n                </div>\n                <div className=\"actions\">\n                    <button>Validate</button>\n                </div>\n            </Form>\n        );\n    }\n});\n";

},{}],19:[function(require,module,exports){
'use strict';

var CustomRuleForm = require('./custom-rule-form.js'),
    CustomRuleFormTxt = require('./custom-rule-form.txt'),
    Code = require('../code.js');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'CustomRuleExample',

    /**
     * Renders the form.
     */
    render: function render() {
        return React.createElement('div', { className: 'example' }, React.createElement('h3', null, 'Example 3: Custom Rule'), React.createElement('div', { className: 'code-preview' }, React.createElement('div', { className: 'preview' }, React.createElement(CustomRuleForm, null)), React.createElement(Code, { value: CustomRuleFormTxt })));
    }
});

},{"../code.js":1,"./custom-rule-form.js":20,"./custom-rule-form.txt":21}],20:[function(require,module,exports){
'use strict';

var ReactFormValidation = require('react-form-validation'),
    Instance = ReactFormValidation.Instance,
    Error = ReactFormValidation.Error,
    Rules = ReactFormValidation.Rules,
    Form = ReactFormValidation.Form,
    Input = ReactFormValidation.Input,
    Hint = ReactFormValidation.Hint;

/**
 * Registers a custom rule for validating usernames.
 * the rules will be accessible form Rules.{ruleName}.
 */
Rules.register('myCustomUsernameRule', function () {
    return {
        check: function check(value) {
            if (!/^[a-z0-9]+$/.test(value)) {
                return 'letters';
            }
            if (!value || value.length < 5) {
                return 'length';
            }
            if (!/[0-9]+$/.test(value)) {
                return 'syntax';
            }
            return true;
        },
        messages: {
            letters: 'Username should only contain lower case characters or numbers',
            length: 'Username should be at least 5 characters',
            syntax: 'Username should end with numbers'
        }
    };
});

/**
 * Simple login form.
 */
module.exports = React.createClass({
    displayName: 'exports',

    /**
     * Returns the initial state of the component.
     */
    getInitialState: function getInitialState() {
        return {
            form: new Instance({
                fields: {
                    username: Rules.required().myCustomUsernameRule()
                }
            })
        };
    },

    /**
     * Renders the form.
     */
    render: function render() {
        var form = this.state.form;
        return React.createElement(Form, { form: form }, React.createElement('h4', null, 'Custom Rule'), React.createElement('div', { className: 'field' }, 'Username: ', React.createElement(Input, { type: 'text', name: 'username', form: form }), React.createElement(Error, { forName: 'username', form: form }), React.createElement(Hint, { forName: 'username', form: form, display: 'error|valid|pristine' }, 'Should contain at least 5 characters (lowercase letters or numbers) and end with a number. Why? Because!')), React.createElement('div', { className: 'actions' }, React.createElement('button', null, 'Validate')));
    }
});

},{"react-form-validation":39}],21:[function(require,module,exports){
module.exports = "\nvar ReactFormValidation = require('react-form-validation'),\n    Instance = ReactFormValidation.Instance,\n    Error = ReactFormValidation.Error,\n    Rules = ReactFormValidation.Rules,\n    Form = ReactFormValidation.Form,\n    Input = ReactFormValidation.Input,\n    Hint = ReactFormValidation.Hint;\n\n/**\n * Registers a custom rule for validating usernames.\n * the rules will be accessible form Rules.{ruleName}.\n */\nRules.register('myCustomUsernameRule', function() {\n    return {\n        check: function check(value) {\n            if (!/^[a-z0-9]+$/.test(value)) {\n                return 'letters';\n            }\n            if (!value || value.length < 5) {\n                return 'length';\n            }\n            if (!/[0-9]+$/.test(value)) {\n                return 'syntax';\n            }\n            return true;\n        },\n        messages: {\n            letters: 'Username should only contain lower case characters or numbers',\n            length: 'Username should be at least 5 characters',\n            syntax: 'Username should end with numbers'\n        }\n    };\n});\n\n/**\n * Simple login form.\n */\nmodule.exports = React.createClass({\n    /**\n     * Returns the initial state of the component.\n     */\n    getInitialState: function() {\n        return {\n            form: new Instance({\n                fields: {\n                    username: Rules.required().myCustomUsernameRule()\n                }\n            })\n        };\n    },\n\n    /**\n     * Renders the form.\n     */\n    render: function() {\n        var form = this.state.form;\n        return (\n            <Form form={form}>\n                <h4>Custom Rule</h4>\n                <div className=\"field\">\n                    Username: <Input type=\"text\" name=\"username\" form={form} />\n                    <Error forName=\"username\" form={form} />\n                    <Hint forName=\"username\" form={form} display=\"error|valid|pristine\">\n                        Should contain at least 5 characters (lowercase letters or numbers) and end\n                        with a number. Why? Because!\n                    </Hint>\n                </div>\n                <div className=\"actions\">\n                    <button>Validate</button>\n                </div>\n            </Form>\n        );\n    }\n});\n";

},{}],22:[function(require,module,exports){
'use strict';

var ListForm = require('./list-form.js'),
    ListFormTxt = require('./list-form.txt'),
    Code = require('../code.js');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'ListExample',

    /**
     * Renders the form.
     */
    render: function render() {
        return React.createElement('div', { className: 'example' }, React.createElement('h3', null, 'Example 5: List'), React.createElement('div', { className: 'code-preview' }, React.createElement('div', { className: 'preview' }, React.createElement(ListForm, null)), React.createElement(Code, { value: ListFormTxt })));
    }
});

},{"../code.js":1,"./list-form.js":23,"./list-form.txt":24}],23:[function(require,module,exports){
"use strict";

var ReactFormValidation = require('react-form-validation'),
    Instance = ReactFormValidation.Instance,
    Error = ReactFormValidation.Error,
    Hint = ReactFormValidation.Hint,
    Rules = ReactFormValidation.Rules,
    Form = ReactFormValidation.Form,
    Input = ReactFormValidation.Input;

/**
 * Friend item form.
 */
var FriendForm = React.createClass({
    displayName: "FriendForm",

    render: function render() {
        var form = this.props.form;
        return React.createElement("div", { className: "fieldset friend" }, React.createElement("b", null, "Friend ", this.props.index + 1), React.createElement("div", { className: "field" }, "Name: ", React.createElement(Input, { type: "text", name: "name", form: form }), React.createElement(Error, { forName: "name", form: form })), React.createElement("div", { className: "field" }, "Age: ", React.createElement(Input, { type: "text", name: "age", form: form }), React.createElement(Error, { forName: "age", form: form })));
    }
});

/**
 * List example form.
 */
module.exports = React.createClass({
    displayName: "exports",

    /**
     * Returns the initial state of the component.
     */
    getInitialState: function getInitialState() {
        return {
            form: new Instance({
                fields: {
                    friend: {
                        name: Rules.required(),
                        age: Rules.optional().integer()
                    }
                }
            }),
            nbFriends: 2
        };
    },

    /**
     * Called when the user clicks "add friend".
     */
    onClickAddFriend: function onClickAddFriend() {
        this.setState({
            nbFriends: this.state.nbFriends + 1
        });
    },

    /**
     * Renders the form.
     */
    renderFriendFields: function renderFriendFields(form) {
        var ret = [];
        for (var i = 0; i < this.state.nbFriends; i++) {
            var subform = form.fieldset('friend', i);
            ret.push(React.createElement(FriendForm, { key: i, index: i, form: subform }));
        }
        return ret;
    },

    /**
     * Renders the form.
     */
    render: function render() {
        var form = this.state.form;
        return React.createElement(Form, { form: form }, React.createElement("h4", null, "Friend List"), this.renderFriendFields(form), React.createElement("div", { className: "actions" }, React.createElement("button", { type: "button", onClick: this.onClickAddFriend }, "Add Friend"), React.createElement("button", null, "Validate")));
    }
});

},{"react-form-validation":39}],24:[function(require,module,exports){
module.exports = "\nvar ReactFormValidation = require('react-form-validation'),\n    Instance = ReactFormValidation.Instance,\n    Error = ReactFormValidation.Error,\n    Hint = ReactFormValidation.Hint,\n    Rules = ReactFormValidation.Rules,\n    Form = ReactFormValidation.Form,\n    Input = ReactFormValidation.Input;\n\n/**\n * Friend item form.\n */\nvar FriendForm = React.createClass({\n    render: function() {\n        var form = this.props.form;\n        return (\n            <div className=\"fieldset friend\">\n                <b>Friend {this.props.index + 1}</b>\n                <div className=\"field\">\n                    Name: <Input type=\"text\" name=\"name\" form={form} />\n                    <Error forName=\"name\" form={form} />\n                </div>\n                <div className=\"field\">\n                    Age: <Input type=\"text\" name=\"age\" form={form} />\n                    <Error forName=\"age\" form={form} />\n                </div>\n            </div>\n        );\n    }\n});\n\n/**\n * List example form.\n */\nmodule.exports = React.createClass({\n    /**\n     * Returns the initial state of the component.\n     */\n    getInitialState: function() {\n        return {\n            form: new Instance({\n                fields: {\n                    friend: {\n                        name: Rules.required(),\n                        age: Rules.optional().integer()\n                    }\n                }\n            }),\n            nbFriends: 2\n        };\n    },\n\n    /**\n     * Called when the user clicks \"add friend\".\n     */\n    onClickAddFriend: function() {\n        this.setState({\n            nbFriends: this.state.nbFriends+1\n        });\n    },\n\n    /**\n     * Renders the form.\n     */\n    renderFriendFields: function(form) {\n        var ret = [];\n        for (var i=0; i<this.state.nbFriends; i++) {\n            var subform = form.fieldset('friend', i);\n            ret.push(<FriendForm key={i} index={i} form={subform} />);\n        }\n        return ret;\n    },\n\n    /**\n     * Renders the form.\n     */\n    render: function() {\n        var form = this.state.form;\n        return (\n            <Form form={form}>\n                <h4>Friend List</h4>\n                { this.renderFriendFields(form) }\n                <div className=\"actions\">\n                    <button type=\"button\" onClick={this.onClickAddFriend}>Add Friend</button>\n                    <button>Validate</button>\n                </div>\n            </Form>\n        );\n    }\n});\n";

},{}],25:[function(require,module,exports){
'use strict';

var LoginForm = require('./login-form.js'),
    LoginFormTxt = require('./login-form.txt'),
    Code = require('../code.js');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'LoginExample',

    /**
     * Renders the form.
     */
    render: function render() {
        return React.createElement('div', { className: 'example' }, React.createElement('h3', null, 'Example 1: Login'), React.createElement('div', { className: 'code-preview' }, React.createElement('div', { className: 'preview' }, React.createElement(LoginForm, null)), React.createElement(Code, { value: LoginFormTxt })));
    }
});

},{"../code.js":1,"./login-form.js":26,"./login-form.txt":27}],26:[function(require,module,exports){
"use strict";

var ReactFormValidation = require('react-form-validation'),
    Instance = ReactFormValidation.Instance,
    Error = ReactFormValidation.Error,
    Rules = ReactFormValidation.Rules,
    Form = ReactFormValidation.Form,
    Input = ReactFormValidation.Input;

/**
 * Simple login form.
 */
module.exports = React.createClass({
    displayName: "exports",

    /**
     * Returns the initial state of the component.
     */
    getInitialState: function getInitialState() {
        return {
            form: new Instance({
                fields: {
                    email: Rules.required().email(),
                    password: Rules.required()
                }
            })
        };
    },

    /**
     * Renders the form.
     */
    render: function render() {
        var form = this.state.form;
        return React.createElement(Form, { form: form }, React.createElement("h4", null, "Login"), React.createElement("div", { className: "field" }, "Email: ", React.createElement(Input, { type: "text", name: "email", form: form }), React.createElement(Error, { forName: "email", form: form })), React.createElement("div", { className: "field" }, "Password: ", React.createElement(Input, { type: "password", name: "password", form: form }), React.createElement(Error, { forName: "password", form: form })), React.createElement("div", { className: "actions" }, React.createElement("button", null, "Login")));
    }
});

},{"react-form-validation":39}],27:[function(require,module,exports){
module.exports = "\nvar ReactFormValidation = require('react-form-validation'),\n    Instance = ReactFormValidation.Instance,\n    Error = ReactFormValidation.Error,\n    Rules = ReactFormValidation.Rules,\n    Form = ReactFormValidation.Form,\n    Input = ReactFormValidation.Input;\n\n/**\n * Simple login form.\n */\nmodule.exports = React.createClass({\n    /**\n     * Returns the initial state of the component.\n     */\n    getInitialState: function() {\n        return {\n            form: new Instance({\n                fields: {\n                    email: Rules.required().email(),\n                    password: Rules.required()\n                }\n            })\n        };\n    },\n\n    /**\n     * Renders the form.\n     */\n    render: function() {\n        var form = this.state.form;\n        return (\n            <Form form={form}>\n                <h4>Login</h4>\n                <div className=\"field\">\n                    Email: <Input type=\"text\" name=\"email\" form={form} />\n                    <Error forName=\"email\" form={form} />\n                </div>\n                <div className=\"field\">\n                    Password: <Input type=\"password\" name=\"password\" form={form} />\n                    <Error forName=\"password\" form={form} />\n                </div>\n                <div className=\"actions\">\n                    <button>Login</button>\n                </div>\n            </Form>\n        );\n    }\n});\n";

},{}],28:[function(require,module,exports){
'use strict';

var RegisterForm = require('./register-form.js'),
    RegisterFormTxt = require('./register-form.txt'),
    Code = require('../code.js');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'RegisterExample',

    /**
     * Renders the form.
     */
    render: function render() {
        return React.createElement('div', { className: 'example' }, React.createElement('h3', null, 'Example 2: Registration'), React.createElement('div', { className: 'code-preview' }, React.createElement('div', { className: 'preview' }, React.createElement(RegisterForm, null)), React.createElement(Code, { value: RegisterFormTxt })));
    }
});

},{"../code.js":1,"./register-form.js":29,"./register-form.txt":30}],29:[function(require,module,exports){
'use strict';

var ReactFormValidation = require('react-form-validation'),
    Instance = ReactFormValidation.Instance,
    Error = ReactFormValidation.Error,
    Hint = ReactFormValidation.Hint,
    Rules = ReactFormValidation.Rules,
    Form = ReactFormValidation.Form,
    Input = ReactFormValidation.Input;

/**
 * Simple login form.
 */
module.exports = React.createClass({
    displayName: 'exports',

    /**
     * Returns the initial state of the component.
     */
    getInitialState: function getInitialState() {
        return {
            form: new Instance({
                fields: {
                    username: Rules.required().regex(/^[a-z0-9_]+$/, 'Should only contain letters, numbers and _.'),
                    email: Rules.required().email(),
                    password: Rules.required().password(),
                    confirmPassword: Rules.equals('password')
                }
            })
        };
    },

    /**
     * Renders the form.
     */
    render: function render() {
        var form = this.state.form;
        return React.createElement(Form, { form: form }, React.createElement('h4', null, 'Register'), React.createElement('div', { className: 'field' }, 'Username: ', React.createElement(Input, { type: 'text', name: 'username', form: form }), React.createElement(Error, { forName: 'username', form: form }), React.createElement(Hint, { forName: 'username', form: form,
            text: 'Only letters, numbers or _ is allowed' })), React.createElement('div', { className: 'field' }, 'Email: ', React.createElement(Input, { type: 'text', name: 'email', form: form }), React.createElement(Error, { forName: 'email', form: form })), React.createElement('div', { className: 'field' }, 'Password: ', React.createElement(Input, { type: 'password', name: 'password', form: form }), React.createElement(Error, { forName: 'password', form: form }), React.createElement(Hint, { forName: 'password', form: form,
            text: 'At least 8 characters, one uppercase, one lowercase and one number' })), React.createElement('div', { className: 'field' }, 'Confirm Password: ', React.createElement(Input, { type: 'password', name: 'confirmPassword', form: form }), React.createElement(Error, { forName: 'confirmPassword', form: form })), React.createElement('div', { className: 'actions' }, React.createElement('button', null, 'Register')));
    }
});

},{"react-form-validation":39}],30:[function(require,module,exports){
module.exports = "\nvar ReactFormValidation = require('react-form-validation'),\n    Instance = ReactFormValidation.Instance,\n    Error = ReactFormValidation.Error,\n    Hint = ReactFormValidation.Hint,\n    Rules = ReactFormValidation.Rules,\n    Form = ReactFormValidation.Form,\n    Input = ReactFormValidation.Input;\n\n/**\n * Simple login form.\n */\nmodule.exports = React.createClass({\n    /**\n     * Returns the initial state of the component.\n     */\n    getInitialState: function() {\n        return {\n            form: new Instance({\n                fields: {\n                    username: Rules.required().regex(/^[a-z0-9_]+$/,\n                        'Should only contain letters, numbers and _.'),\n                    email: Rules.required().email(),\n                    password: Rules.required().password(),\n                    confirmPassword: Rules.equals('password')\n                }\n            })\n        };\n    },\n\n    /**\n     * Renders the form.\n     */\n    render: function() {\n        var form = this.state.form;\n        return (\n            <Form form={form}>\n                <h4>Register</h4>\n                <div className=\"field\">\n                    Username: <Input type=\"text\" name=\"username\" form={form} />\n                    <Error forName=\"username\" form={form} />\n                    <Hint forName=\"username\" form={form}\n                        text=\"Only letters, numbers or _ is allowed\" />\n                </div>\n                <div className=\"field\">\n                    Email: <Input type=\"text\" name=\"email\" form={form} />\n                    <Error forName=\"email\" form={form} />\n                </div>\n                <div className=\"field\">\n                    Password: <Input type=\"password\" name=\"password\" form={form} />\n                    <Error forName=\"password\" form={form} />\n                    <Hint forName=\"password\" form={form}\n                        text=\"At least 8 characters, one uppercase, one lowercase and one number\" />\n                </div>\n                <div className=\"field\">\n                    Confirm Password: <Input type=\"password\" name=\"confirmPassword\" form={form} />\n                    <Error forName=\"confirmPassword\" form={form} />\n                </div>\n                <div className=\"actions\">\n                    <button>Register</button>\n                </div>\n            </Form>\n        );\n    }\n});\n";

},{}],31:[function(require,module,exports){

// render page
'use strict';

var Main = require('./main.js');
React.render(React.createElement(Main, null), document.getElementById('main'));

},{"./main.js":33}],32:[function(require,module,exports){
module.exports = "// using an ES6 transpiler, like babel\nimport { Form, Input } from 'react-form-validation';\n\n// not using an ES6 transpiler\nvar ReactFormValidation = require('react-form-validation'),\n    Error = ReactFormValidation.Error,\n    Hint = ReactFormValidation.Hint;";

},{}],33:[function(require,module,exports){
'use strict';

var LoginExample = require('./examples/login-example.js'),
    RegisterExample = require('./examples/register-example.js'),
    CustomRuleExample = require('./examples/custom-rule-example.js'),
    CustomFieldExample = require('./examples/custom-field-example.js'),
    ListExample = require('./examples/list-example.js'),
    RulesDocumentation = require('./docs/rules-documentation.js'),
    InstanceDocumentation = require('./docs/instance-documentation.js'),
    FormDocumentation = require('./docs/form-documentation.js'),
    InputDocumentation = require('./docs/input-documentation.js'),
    ErrorDocumentation = require('./docs/error-documentation.js'),
    HintDocumentation = require('./docs/hint-documentation.js'),
    SelectDocumentation = require('./docs/select-documentation.js'),
    ListenerMixinDocumentation = require('./docs/listener-mixin-documentation.js'),
    FieldMixinDocumentation = require('./docs/field-mixin-documentation.js'),
    Code = require('./code.js'),
    ImportCodeText = require('./import.code.txt');

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Main',

    /**
     * Renders the form.
     */
    render: function render() {
        return React.createElement('div', { id: 'main' }, React.createElement('div', { className: 'header-wrapper' }, React.createElement('div', { className: 'header' }, React.createElement('a', { className: 'logo', href: '#' }, React.createElement('img', { src: 'logo.svg' }), 'React Form Validation'), React.createElement('a', { className: 'link', href: '#install' }, 'Install'), React.createElement('a', { className: 'link', href: '#usage' }, 'Usage'), React.createElement('a', { className: 'link', href: '#examples' }, 'Examples'), React.createElement('a', { className: 'link', href: '#documentation' }, 'Documentation'), React.createElement('a', { className: 'link', href: 'https://github.com/lud2k/react-form-validation' }, 'GitHub'))), React.createElement('div', { className: 'content-wrapper' }, React.createElement('div', { className: 'content' }, React.createElement('div', { className: 'section' }, React.createElement('h2', null, 'Introduction'), React.createElement('p', null, '/!\\ Work in progress.', React.createElement('br', null), React.createElement('br', null), 'React Form Validation is a React library that makes setting up form validation really easy.')), React.createElement('div', { className: 'section' }, React.createElement('h2', null, React.createElement('a', { name: 'install', className: 'anchor' }), 'Install'), React.createElement('h3', null, 'NPM'), React.createElement(Code, null, 'npm install react-form-validation --save'), React.createElement('h3', null, 'Bower'), React.createElement(Code, null, 'bower install react-form-validation --save'), React.createElement('h2', null, React.createElement('a', { name: 'usage', className: 'anchor' }), 'Usage')), React.createElement('div', { className: 'section' }, React.createElement('h3', null, 'Browserify / Webpack'), React.createElement('p', null, 'The most common usage. After installing this library, access it using ', React.createElement('i', null, 'require'), ' or ', React.createElement('i', null, 'import'), '.'), React.createElement(Code, { mode: 'javascript', value: ImportCodeText }), React.createElement('h3', null, 'Script'), React.createElement('p', null, 'This library can be used as an external script added to your web page.', React.createElement('br', null), 'The script ', React.createElement('i', null, 'dist/react-form-validation.js'), ' exposes the classes of the library on window.FormValidation. Instead of using require() you can then access the classes using that object (', React.createElement('i', null, 'window.FormValidation.Field'), ').'), React.createElement(Code, { mode: 'xml' }, '<script type="text/javascript" src="{path_to_library}/dist/react-form-validation.js"></script>')), React.createElement('div', { className: 'section' }, React.createElement('h2', null, React.createElement('a', { name: 'examples', className: 'anchor' }), 'Examples'), React.createElement(LoginExample, null), React.createElement(RegisterExample, null), React.createElement(CustomRuleExample, null), React.createElement(CustomFieldExample, null), React.createElement(ListExample, null)), React.createElement('div', { className: 'section' }, React.createElement('h2', null, React.createElement('a', { name: 'documentation', className: 'anchor' }), 'Documentation'), React.createElement('h3', null, ' Classes '), React.createElement(RulesDocumentation, null), React.createElement(InstanceDocumentation, null), React.createElement('h3', null, ' Components '), React.createElement(FormDocumentation, null), React.createElement(InputDocumentation, null), React.createElement(SelectDocumentation, null), React.createElement(ErrorDocumentation, null), React.createElement(HintDocumentation, null), React.createElement('h3', null, ' Mixins '), React.createElement(ListenerMixinDocumentation, null), React.createElement(FieldMixinDocumentation, null)))), React.createElement('div', { className: 'footer-wrapper' }, React.createElement('div', { className: 'footer' }, 'Created by ', React.createElement('a', { href: 'https://github.com/lud2k' }, 'Ludovic Cabre'))));
    }
});

},{"./code.js":1,"./docs/error-documentation.js":2,"./docs/field-mixin-documentation.js":4,"./docs/form-documentation.js":5,"./docs/hint-documentation.js":7,"./docs/input-documentation.js":9,"./docs/instance-documentation.js":11,"./docs/listener-mixin-documentation.js":12,"./docs/rules-documentation.js":13,"./docs/select-documentation.js":14,"./examples/custom-field-example.js":16,"./examples/custom-rule-example.js":19,"./examples/list-example.js":22,"./examples/login-example.js":25,"./examples/register-example.js":28,"./import.code.txt":32}],34:[function(require,module,exports){
(function (global){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null),
    ListenerMixin = require('./listener-mixin.js');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Error',

    /**
     * Mixins
     */
    mixins: [ListenerMixin],

    /**
     * Properties type.
     */
    propTypes: {
        form: React.PropTypes.any.isRequired,
        forName: React.PropTypes.string.isRequired
    },

    /**
     * Returns the initial state of the component.
     */
    getInitialState: function getInitialState() {
        return this.getFieldState();
    },

    /**
     * Called by the listener mixin when the form is validated.
     */
    formDidValidate: function formDidValidate(result) {
        this.setState(this.getFieldState());
    },

    getFieldState: function getFieldState() {
        var fieldState = this.props.form.getFieldStateByName(this.props.forName);
        return {
            error: fieldState ? fieldState.error : undefined,
            valid: fieldState ? fieldState.valid : undefined
        };
    },

    /**
     * Renders the input.
     */
    render: function render() {
        if (this.state.valid === false) {
            return React.createElement(
                'label',
                _extends({ className: 'error' }, this.props, { form: null }),
                this.state.error
            );
        } else {
            return null;
        }
    }

});
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./listener-mixin.js":42}],35:[function(require,module,exports){
'use strict';

/**
 * This mixin registers the component as a field in the parent form.
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
module.exports = {
    /**
     * When the component will mount register it in the form.
     */
    componentWillMount: function componentWillMount() {
        if (this.props.form) {
            this.props.form.register(this);
        }
    },

    /**
     * When the component is removed, unregister it from the form.
     */
    componentWillUnmount: function componentWillUnmount() {
        if (this.props.form) {
            this.props.form.unregister(this);
        }
    },

    /**
     * Can be called to tell the form that the component's value has changed.
     */
    validateField: function validateField(force) {
        if (this.props.form) {
            this.props.form.validate(this, force);
        }
    }
};
},{}],36:[function(require,module,exports){
'use strict';

/**
 * Field class.
 * Represents a field stored in the form instance.
 */
var Field = function Field(component, part, state) {
    this.component = component;
    this.part = part;
    this.state = state;
};

/**
 * Returns the name of this field.
 */
Field.prototype.getName = function () {
    return this.component.props.name;
};

/**
 * Returns the component.
 */
Field.prototype.getComponent = function () {
    return this.component;
};

/**
 * Returns the rules specified on the component.
 */
Field.prototype.getRules = function () {
    return this.component.props.rules;
};

/**
 * Returns the path of this field.
 */
Field.prototype.getPath = function () {
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
Field.prototype.getFullName = function () {
    var path = this.getPath();
    return path ? path + '.' + this.getName() : this.getName();
};

/**
 * Returns a field's state.
 */
Field.prototype.getState = function () {
    return this.state;
};

module.exports = Field;
},{}],37:[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

/**
 * Form component.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Form',

    /**
     * Properties type.
     */
    propTypes: {
        form: React.PropTypes.any.isRequired
    },

    /**
     * Called when the form is submitted.
     */
    onSubmit: function onSubmit(event) {
        event.preventDefault();

        // validate form, then call callback
        var result = this.props.form.validate(undefined, true);
        if (this.props.onSubmit) {
            this.props.onSubmit(result.valid, result.data, this.props.form);
        }

        // scroll to error
        if (this.props.scrollToError) {}
    },

    /**
     * Renders the component.
     */
    render: function render() {
        return React.createElement(
            'form',
            { className: this.props.className, noValidate: true, onSubmit: this.onSubmit },
            this.props.children
        );
    }
});

module.exports.Form = require('./form.js');
module.exports.Instance = require('./instance.js');
module.exports.Input = require('./input.js');
module.exports.Error = require('./error.js');
module.exports.FieldMixin = require('./field-mixin.js');
module.exports.Rules = require('./rules.js');
module.exports.Select = require('./select.js');
module.exports.ListenerMixin = require('./listener-mixin.js');

// TODO: find first error then .scrollIntoView();
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./error.js":34,"./field-mixin.js":35,"./form.js":37,"./input.js":40,"./instance.js":41,"./listener-mixin.js":42,"./rules.js":43,"./select.js":44}],38:[function(require,module,exports){
(function (global){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null),
    ListenerMixin = require('./listener-mixin.js');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Hint',

    /**
     * Mixins
     */
    mixins: [ListenerMixin],

    /**
     * Properties type.
     */
    propTypes: {
        display: React.PropTypes.string,
        text: React.PropTypes.string,
        form: React.PropTypes.any.isRequired,
        forName: React.PropTypes.string.isRequired
    },

    /**
     * Returns the default props.
     */
    getDefaultProps: function getDefaultProps() {
        return {
            display: 'pristine|valid'
        };
    },

    /**
     * Returns the initial state of the component.
     */
    getInitialState: function getInitialState() {
        return {
            state: this.props.form.getFieldStateByName(this.props.forName),
            display: this.parseDisplayString(this.props.display)
        };
    },

    /**
     * Called when the component's props have changed.
     */
    componentWillReceiveProps: function componentWillReceiveProps(newProps) {
        if (newProps.display !== this.props.display) {
            this.setState({
                display: this.parseDisplayString(newProps.display)
            });
        }
    },

    /**
     * Converts the display property to an object.
     */
    parseDisplayString: function parseDisplayString(display) {
        var ret = {};
        (display || '').split(/[\|,]/).forEach(function (item) {
            ret[item] = true;
        });
        return ret;
    },

    /**
     * Called by the listener mixin when the form is validated.
     */
    formDidValidate: function formDidValidate(result) {
        this.setState({
            state: this.props.form.getFieldStateByName(this.props.forName)
        });
    },

    /**
     * Renders the input.
     */
    render: function render() {
        var display = this.state.display,
            state = this.state.state;
        if (display.error && state.valid === false || display.pristine && state.validated !== true || display.valid && state.valid === true) {
            return React.createElement(
                'label',
                _extends({ className: 'hint' }, this.props, { form: null }),
                this.props.text || this.props.children
            );
        } else {
            return null;
        }
    }

});
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./listener-mixin.js":42}],39:[function(require,module,exports){
'use strict';

module.exports.Error = require('./error.js');
module.exports.FieldMixin = require('./field-mixin.js');
module.exports.Field = require('./field.js');
module.exports.Form = require('./form.js');
module.exports.Hint = require('./hint.js');
module.exports.Input = require('./input.js');
module.exports.Instance = require('./instance.js');
module.exports.ListenerMixin = require('./listener-mixin.js');
module.exports.Rules = require('./rules.js');
module.exports.Select = require('./select.js');
},{"./error.js":34,"./field-mixin.js":35,"./field.js":36,"./form.js":37,"./hint.js":38,"./input.js":40,"./instance.js":41,"./listener-mixin.js":42,"./rules.js":43,"./select.js":44}],40:[function(require,module,exports){
(function (global){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null),
    FieldMixin = require('./field-mixin.js'),
    ListenerMixin = require('./listener-mixin.js');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Input',

    /**
     * Mixins.
     */
    mixins: [FieldMixin, ListenerMixin],

    /**
     * Properties type.
     */
    propTypes: {
        form: React.PropTypes.any.isRequired,
        name: React.PropTypes.string.isRequired
    },

    /**
     * Called to check if the field is checked.
     */
    isChecked: function isChecked() {
        var type = this.props.type;
        if (type === 'checkbox' || type === 'radio') {
            var element = React.findDOMNode(this);
            return element.checked;
        }
    },

    /**
     * Called to check if the field is a list.
     */
    isList: function isList() {
        var type = this.props.type;
        return type === 'checkbox';
    },

    /**
     * Returns the value of the input.
     */
    getValue: function getValue() {
        var element = React.findDOMNode(this);
        return element.value;
    },

    /**
     * Called when the value of the input has changed.
     */
    onChange: function onChange(event) {
        this.validateField();

        // call parent prop
        if (this.props.onChange) {
            this.props.onChange(event);
        }
    },

    /**
     * Called when the field looses focus.
     * This forces validation of the field.
     */
    onBlur: function onBlur() {
        this.validateField(true);

        // call parent prop
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    },

    /**
     * Called by the listener mixin after the form is validated.
     */
    formDidValidate: function formDidValidate() {},

    /**
     * Returns the component's className.
     */
    className: function className(fieldState) {
        var ret = [];
        if (this.props.className) {
            ret.push(this.props.className);
        }
        if (fieldState.validated !== true) {
            ret.push('pristine');
        }
        if (fieldState.valid === false) {
            ret.push('error');
        }
        return ret.join(' ');
    },

    /**
     * Renders the input.
     */
    render: function render() {
        var fieldState = this.props.form.getFieldState(this);
        return React.createElement('input', _extends({}, this.props, { className: this.className(fieldState),
            onChange: this.onChange, onBlur: this.onBlur, form: null }));
    }

});

// TODO: implement getting the field state
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./field-mixin.js":35,"./listener-mixin.js":42}],41:[function(require,module,exports){
'use strict';

var Field = require('./field.js'),
    Rules = require('./rules.js'),
    ValidationContext = require('./validation-context.js');

/**
 * Instance class.
 * Manages the state of all the components.
 */
var Instance = function Instance(config) {
    this.fields = [];
    this.listeners = [];
    this.config = this.normalizeConfig(config);
};

/**
 * The config object can be written in different ways. This function normalizes it so that it
 * is easier to use later.
 */
Instance.prototype.normalizeConfig = function (config) {
    for (var key in config) {
        if (config.hasOwnProperty(key)) {
            if (config[key] instanceof Rules) {
                // replace by an object with rules inside
                config[key] = {
                    rules: config[key]
                };
            } else if (config.rules === undefined) {
                // recursively normalizes the config
                this.normalizeConfig(config[key]);
            }
        }
    }
    return config;
},

/**
 * Creates a sub form. Returns a proxy of the current object with an extra "part" property
 * that is used to identify subparts of a form.
 */
Instance.prototype.fieldset = function (name, key) {
    var form = function form() {};
    form.prototype = this;
    var proxy = new form();
    proxy.part = {
        parent: this.part,
        name: name,
        key: key
    };
    return proxy;
};

/**
 * Registers a component.
 */
Instance.prototype.register = function (component) {
    this.fields.push(new Field(component, this.part, { validated: false }));
};

/**
 * Unregisters a component.
 */
Instance.prototype.unregister = function (component) {
    var fields = this.fields;
    for (var i = 0; i < fields.length; i++) {
        if (fields[i].getComponent() === component) {
            fields.splice(i, 1);
            break;
        }
    }
};

/**
 * Registers a listener.
 */
Instance.prototype.addListener = function (object) {
    this.listeners.push(object);
};

/**
 * Unregisters a listener.
 */
Instance.prototype.removeListener = function (object) {
    // remove object from list of listeners
    var index = this.listeners.indexOf(object);
    if (index !== -1) {
        this.listeners.splice(index, 1);
    }
};

/**
 * Returns the information that this class stores about a component.
 */
Instance.prototype.getField = function (component) {
    var fields = this.fields;
    for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        if (field.getComponent() === component) {
            return field;
        }
    }
};

/**
 * Returns a field's state.
 */
Instance.prototype.getFieldState = function (component) {
    var field = this.getField(component);
    if (field) {
        return field.getState();
    }
};

Instance.prototype.getFieldsetPath = function (fieldOrForm) {
    var part = fieldOrForm.part,
        ret = [];
    while (part) {
        ret.push(part.name + (part.key ? '[' + part.key + ']' : ''));
        part = part.parent;
    }
    return ret.join('.');
};

/**
 * Returns the information that this class stores about a component by looking for its name.
 * Will only search in the current fieldset (if in a fieldset).
 */
Instance.prototype.getFieldByName = function (name) {
    var fields = this.fields;
    for (var i = 0; i < fields.length; i++) {
        var field = fields[i],
            fieldName = field.component.props.name;
        if (fieldName === name && this.getFieldsetPath(this) === this.getFieldsetPath(field)) {
            return field;
        }
    }
};

/**
 * Returns a field's state by looking for its name.
 * Will only search in the current fieldset (if in a fieldset).
 */
Instance.prototype.getFieldStateByName = function (name) {
    var data = this.getFieldByName(name);
    if (data) {
        return data.state;
    }
};

/**
 * Returns the values of all the fields.
 */
Instance.prototype.getFieldsData = function () {
    var ret = {};

    // get all the fields
    this.fields.forEach(function (field) {
        var fullName = field.getFullName();
        if (!ret[fullName]) {
            ret[fullName] = {
                fields: []
            };
        }
        ret[fullName].fields.push(field);
    }, this);

    // compute values for all the fields
    for (var key in ret) {
        if (ret.hasOwnProperty(key)) {
            var data = ret[key],
                firstField = data.fields[0],
                firstComponent = firstField.component,
                isList = firstComponent.isList ? firstComponent.isList() : false;

            // prepare lists
            if (isList) {
                data.value = [];
                data.fields.forEach(function (field) {
                    var component = field.component,
                        checked = component.isChecked ? component.isChecked() : true;
                    if (checked === undefined || checked === true) {
                        data.value.push(field.component.getValue());
                    }
                });
            } else {
                if (data.fields.length > 1) {
                    data.fields.forEach(function (field) {
                        var component = field.component,
                            checked = component.isChecked ? component.isChecked() : true;
                        if (checked === true) {
                            data.value = component.getValue();
                        }
                    });
                } else {
                    var checked = firstComponent.isChecked ? firstComponent.isChecked() : true;
                    if (checked === undefined || checked === true) {
                        data.value = firstComponent.getValue();
                    }
                }
            }
        }
    }

    return ret;
};

/**
 * Processes extract form data to have a better formated object.
 *
 * my.key.prop => {my: {key: {prop: ?}}}
 * my.key[?].prop => {my: {key: [{prop: ?}]}}
 */
Instance.prototype.refineData = function (data) {
    var ret = {};

    var parseKey = function parseKey(key) {
        var paths = key.split('.');
        return paths.map(function (path) {
            var parts = path.match(/([^\[]*)(\[(.*?)\])?/),
                key = parts[1],
                index = parts[3];
            return {
                key: key,
                index: index,
                isList: !!index
            };
        });
    };

    var setValue = function setValue(obj, paths, value) {
        for (var i = 0; i < paths.length; i++) {
            var path = paths[i],
                isLast = i === paths.length - 1;

            // create object
            if (path.isList) {
                if (!obj[path.key]) {
                    obj[path.key] = [];
                }
                if (isLast) {
                    obj[path.key][path.index] = value;
                } else {
                    obj = obj[path.key][path.index] = obj[path.key][path.index] || {};
                }
            } else {
                if (isLast) {
                    obj[path.key] = value;
                } else {
                    obj = obj[path.key] = obj[path.key] || {};
                }
            }
        }
    };

    // create objects out of keys that contains dots.
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            var value = data[key],
                paths = parseKey(key);
            setValue(ret, paths, value.value);
        }
    }

    return ret;
};

/**
 * Returns the rules that apply for a given field.
 */
Instance.prototype.getRulesForField = function (field) {
    // any special rules defined on that field?
    var fieldRules = field.getRules();
    if (fieldRules) {
        return fieldRules;
    } else {
        // get full name minus the [keys].
        var path = field.getFullName().replace(/\[[^\]+]\]/g, '').split('.'),
            configField = this.config.fields;

        // traverse config to where the rules should be
        while (path.length > 0 && configField) {
            configField = configField[path.shift()];
        }

        if (configField) {
            return configField.rules;
        }
    }
};

/**
 * Validates a field.
 */
Instance.prototype.validateField = function (field, data, force) {
    var rules = this.getRulesForField(field);
    if (rules) {
        var fullName = field.getFullName(),
            state = data[fullName],
            firstField = state.fields[0];

        // if field hasn't been validated yet, only validate it if force is true
        if (!firstField.state.validated && !force) {
            return;
        }

        // mark fields as validated
        state.fields.forEach(function (field) {
            field.state.validated = true;
        });

        // validate field value
        var result = rules.validate(state.value, new ValidationContext(data, field));
        if (result !== true) {
            state.fields.forEach(function (field) {
                field.state.valid = false;
                field.state.error = result.message;
            });
            return false;
        }

        // update fields state
        state.fields.forEach(function (field) {
            field.state.valid = true;
            field.state.error = null;
        });

        return true;
    }
};

/**
 * Validates all the fields or the field given as parameter.
 */
Instance.prototype.validate = function (target, force) {
    var data = this.getFieldsData();

    var valid = true;
    if (target) {
        // validate just one field
        var field = target.props.form.getFieldByName(target.props.name);
        valid &= this.validateField(field, data, force);
    } else {
        // validate all the fields
        this.fields.forEach(function (field) {
            valid &= this.validateField(field, data, force);
        }, this);
    }

    // prepare result
    var ret = {
        valid: valid,
        state: data,
        data: this.refineData(data)
    };

    // call listeners
    this.listeners.forEach(function (listener) {
        if (listener.formDidValidate) {
            listener.formDidValidate(ret);
        }
    });

    return ret;
};

module.exports = Instance;
},{"./field.js":36,"./rules.js":43,"./validation-context.js":45}],42:[function(require,module,exports){
'use strict';

/**
 * This mixin registers the component as a listener in the parent form.
 *
 * Required props:
 *   - form, the form owning the component
 *
 * The following functions can be implement:
 *   - formDidValidate
 */
module.exports = {
    /**
     * When the component will mount register it in the form.
     */
    componentWillMount: function componentWillMount() {
        if (this.props.form) {
            this.props.form.addListener(this);
        }
    },

    /**
     * When the component is removed, unregister it from the form.
     */
    componentWillUnmount: function componentWillUnmount() {
        if (this.props.form) {
            this.props.form.removeListener(this);
        }
    }
};
},{}],43:[function(require,module,exports){
'use strict';

var EMAIL_REGEXP = new RegExp('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]' + '{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$');

/**
 * Constructor of the Rules class.
 */
var Rules = function Rules(config) {
    this.rules = [];
};

/**
 * Custom exception that if thrown means that the validation can stop and the field is valid.
 */
Rules.OPTIONAL_EXCEPTION = 'OPTIONAL_EXCEPTION';

/**
 * Registers a new rule.
 */
Rules.register = function (name, rule) {
    Rules.prototype[name] = function () {
        this.rules.push(rule.apply(null, arguments));
        return this;
    };
    Rules[name] = function () {
        var rules = new Rules();
        rules[name].apply(rules, arguments);
        return rules;
    };
};

/**
 * Validates that the rules are all valid
 */
Rules.prototype.validate = function (value, context) {
    try {
        for (var i = 0; i < this.rules.length; i++) {
            var rule = this.rules[i],
                valid = rule.check(value, context);

            // validate returned Rules objects
            if (valid instanceof Rules) {
                return valid.validate(value, context);
            }

            // not valid?
            if (valid !== true) {
                return {
                    error: valid,
                    message: valid === false ? rule.message : rule.messages[valid]
                };
            }
        }
    } catch (e) {
        if (e !== Rules.OPTIONAL_EXCEPTION) {
            throw e;
        }
    }
    return true;
};

/**
 * Registers a rule that
 */
Rules.register('onlyIf', function (fn) {
    return {
        check: function check(value, context) {
            var res = fn(value, context);
            if (!res) {
                throw Rules.OPTIONAL_EXCEPTION;
            }
            return true;
        }
    };
});

/**
 * Registers a rule for optional values.
 */
Rules.register('optional', function () {
    return {
        check: function check(value) {
            if (value === undefined || value === '') {
                throw Rules.OPTIONAL_EXCEPTION;
            }
            return true;
        }
    };
});

/**
 * Registers a rule for optional values.
 */
Rules.register('custom', function (fn) {
    return {
        check: function check(value, context) {
            return fn(value, context) || true;
        }
    };
});

/**
 * Registers a rule that checks if something is not empty.
 */
Rules.register('required', function (message) {
    return {
        check: function check(value) {
            if (Array.isArray(value)) {
                // check array not empty
                return value.length > 0;
            } else if (typeof value === 'string' || value instanceof String) {
                // check string not empty
                return value.length > 0;
            } else if (value !== undefined && value !== null) {
                // value is defined
                return true;
            } else {
                return false;
            }
        },
        message: message || 'This field is required.'
    };
});

/**
 * Registers a rule for validating an email.
 */
Rules.register('email', function () {
    return {
        check: function check(value) {
            return EMAIL_REGEXP.test(value);
        },
        message: 'This is not a valid email address'
    };
});

/**
 * Registers a rule for validating an integer.
 */
Rules.register('integer', function (message) {
    return {
        check: function check(value) {
            return /^[0-9]+$/.test(value);
        },
        message: message || 'This is not a valid integer'
    };
});

/**
 * Registers a rule for validating using regexes.
 */
Rules.register('regex', function (regex, message) {
    return {
        check: function check(value) {
            return regex.test(value);
        },
        message: message || 'This field does not match ' + regex
    };
});

/**
 * Registers a rule for checking that something equals something else.
 */
Rules.register('equals', function (otherFieldName) {
    return {
        check: function check(value, context) {
            return context.getFieldValue(otherFieldName) === value;
        },
        message: 'This field does not match ' + otherFieldName
    };
});

/**
 * Registers a rule for validating password.
 */
Rules.register('password', function () {
    return {
        check: function check(value) {
            if (!value || value.length < 8) {
                return 'length';
            }
            if (!/[A-Z]+/.test(value)) {
                return 'upper';
            }
            if (!/[a-z]+/.test(value)) {
                return 'lower';
            }
            if (!/[0-9]+/.test(value)) {
                return 'num';
            }
            return true;
        },
        messages: {
            length: 'Password should be at least 8 characters',
            upper: 'Password should contain at least one uppercase letter',
            lower: 'Password should contain at least one lowercase letter',
            num: 'Password should contain at least one number'
        }
    };
});

/**
 * Registers a rule for validating minimum age.
 */
Rules.register('minAge', function (minAge) {
    return {
        check: function check(value) {
            var diff = new Date(Date.now() - value.getTime()),
                age = Math.abs(diff.getUTCFullYear() - 1970);
            return age >= minAge;
        },
        message: 'You must be at least ' + minAge + ' years old.'
    };
});

/**
 * Export the class.
 */
module.exports = Rules;
},{}],44:[function(require,module,exports){
(function (global){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null),
    FieldMixin = require('./field-mixin.js');

module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Select',

    /**
     * Mixins.
     */
    mixins: [FieldMixin],

    /**
     * Properties type.
     */
    propTypes: {
        form: React.PropTypes.any.isRequired,
        name: React.PropTypes.string.isRequired
    },

    /**
     * Returns the value of the input.
     */
    getValue: function getValue() {
        var element = React.findDOMNode(this);
        return element.value;
    },

    /**
     * Called when the value of the input has changed.
     */
    onChange: function onChange() {
        this.validateField(true);
    },

    /**
     * Returns the component's className.
     */
    rootClassName: function rootClassName(fieldState) {
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
    },

    /**
     * Renders the select.
     */
    render: function render() {
        var fieldState = this.props.form.getFieldState(this);
        return React.createElement(
            'select',
            _extends({}, this.props, { className: this.rootClassName(fieldState),
                onChange: this.onChange, onBlur: this.onBlur }),
            this.props.children
        );
    }

});
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./field-mixin.js":35}],45:[function(require,module,exports){
'use strict';

/**
 * ValidationContext class.
 * Simplifies access to data during validation.
 */
var ValidationContext = function ValidationContext(data, field) {
    this.data = data;
    this.field = field;
};

/**
 * Returns the value a field from its name.
 * It searches the closest field with the given name.
 */
ValidationContext.prototype.getFieldValue = function (name) {
    var fieldPath = this.field.getPath(),
        possibleFullName = fieldPath ? fieldPath + '.' + name : name;

    while (true) {
        if (this.data[possibleFullName]) {
            return this.data[possibleFullName].value;
        } else {
            if (possibleFullName.indexOf('.') !== -1) {
                var parts = /(.*\.)([^.]+\.)([^\.]+)$/.exec(possibleFullName);
                possibleFullName = parts[1] ? parts[1] + parts[3] : parts[3];
            } else {
                break;
            }
        }
    }
};

/**
 * Returns the raw data from the form.
 */
ValidationContext.prototype.getData = function () {
    return this.data;
};

module.exports = ValidationContext;
},{}]},{},[31])