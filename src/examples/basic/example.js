
import ComponentSource from '../../component-source.js';
import LoginForm from './login-form.js';
import LoginFormText from './login-form.txt';
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
                <h2>Form</h2>
                <p>
                    To get started with this library, here is a really simple example showing
                    a login form.
                </p>
                <ComponentSource component={LoginForm}
                                 sources={[
                                     {name: 'login-form.jsx', code: LoginFormText},
                                     {name: 'utils.jsx', code: UtilsText}
                                 ]} />
            </div>
        );
    }
}
