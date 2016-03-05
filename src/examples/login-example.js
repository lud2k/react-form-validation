
import Code from '../code.js';
import LoginForm from './login-form.js';
import LoginTxt from './login-form.txt';

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
                <h2>Login Form</h2>
                <div className="code-preview">
                    <div className="right-side">
                        <div className="preview">
                            <LoginForm formSubmitted={this.formSubmitted.bind(this)} />
                        </div>
                        <div className="data">
                            Form is valid: { this.state.formValid ? 'No' : 'Yes' }{'\n'}
                            Submitted form data:{'\n'}
                            {this.state.formData ? JSON.stringify(this.state.formData, null, 2) : 'not yet validated'}
                        </div>
                    </div>
                    <Code value={LoginTxt} />
                </div>
            </div>
        );
    }
}
