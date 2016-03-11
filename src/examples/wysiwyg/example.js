
import ComponentSource from '../../component-source.js';
import WysiwygForm from './wysiwyg-form.js';
import WysiwygFormText from './wysiwyg-form.txt';
import CKEditorText from './ckeditor.txt';
import UtilsText from '../../utils.txt';

/**
 * Component that renders an example.
 */
export default class LoginExample extends React.Component {
    /**
     * Returns the initial state of this component.
     */
    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * Called when the form is submitted.
     */
    formSubmitted(event, valid, data) {
        this.setState({
            formData: data,
            formValid: valid
        });
    }

    /**
     * Renders the example.
     */
    render() {
        return (
            <div className="example">
                <h2>CKEditor</h2>
                <p>
                    Here is a simple integration of CKeditor WYSIWYG.
                </p>
                <ComponentSource component={WysiwygForm}
                                 sources={[
                                     {name: 'wysiwyg-form.jsx', code: WysiwygFormText},
                                     {name: 'ckeditor.jsx', code: CKEditorText},
                                     {name: 'utils.jsx', code: UtilsText}
                                 ]} />
            </div>
        );
    }
}
