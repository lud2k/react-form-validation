
import { Field } from 'react-form-validation';

/**
 * Registration form.
 */
export default class CKEditor extends Field {
    /**
     * Constructor.
     * IMPORTANT: don't forget to forward the context too.
     */
    constructor(props, context) {
        super(props, context);

        this.onChangeListener = this.onChange.bind(this);
        this.onBlurListener = this.onBlur.bind(this);
    }

    /**
     * Returns the value of the component.
     */
    getValue() {
        return this.editor.getData();
    }

    /**
     * Called when one of the <textarea> selection has changed.
     */
    onChange() {
        // validate the field only if it was already validated before
        this.validateField(false);
    }

    /**
     * Called when one of the <textarea> has lost focus.
     */
    onBlur() {
        // force validation of field
        this.validateField(true);
    }

    /**
     * Called when the component is mounted to the DOM.
     */
    componentDidMount() {
        if (!this.editor) {
            var root = this.refs.root;

            // create editor
            this.editor = CKEDITOR.appendTo(root);
            this.editor.on('blur', this.onBlurListener);
            this.editor.on('change', this.onChangeListener);
        }
    }

    /**
     * Renders the component.
     */
    render() {
        return <div className="ckeditor-field" ref="root" />
    }
}
