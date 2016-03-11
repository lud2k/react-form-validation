
import { Link } from 'react-router';
import ComponentSource from '../../component-source.js';
import LoginForm from './login-form.js';
import LoginFormText from './login-form.txt';
import UtilsText from '../../utils.txt';

/**
 * Component that renders an example.
 */
export default class HintsExample extends React.Component {
    /**
     * Renders the example.
     */
    render() {
        return (
            <div className="example">
                <h2>Errors</h2>
                <p>
                    <u>&lt;Error&gt;</u> is a component that shows errors for a form field.
                    A detailed documentation is available <Link to="/documentation/error-component"> here </Link>
                </p>
                <p>
                    Take a look at the following example. The errors are the text in red
                    under the inputs.
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
