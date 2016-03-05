
import Code from '../code.js';
import ListForm from './list-form.js';
import ListTxt from './list-form.txt';

/**
 * Component that renders an example.
 */
export default class ListExample extends React.Component {
    /**
     * Constructor.
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
                <h2>List Form</h2>
                <div className="code-preview">
                    <div className="right-side">
                        <div className="preview">
                            <ListForm formSubmitted={this.formSubmitted.bind(this)} />
                        </div>
                        <div className="data">
                            Form is valid: { this.state.formValid ? 'No' : 'Yes' }{'\n'}
                            Submitted form data:{'\n'}
                            {this.state.formData ? JSON.stringify(this.state.formData, null, 2) : 'not yet validated'}
                        </div>
                    </div>
                    <Code value={ListTxt} />
                </div>
            </div>
        );
    }
}
