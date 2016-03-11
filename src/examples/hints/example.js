
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
                <h2>Hints</h2>
                <p>
                    <u>&lt;Hint&gt;</u> is a component that allows you to display a text depending
                    on the state of a form field. A detailed documentation is
                    available <Link to="/documentation/hint-component"> here </Link>
                </p>
                <p>
                    Take a look at the following example. The hints are the text in light gray
                    displayed under the inputs. You will notice that depending on if there is an
                    error the hints disappear.
                </p>
                <p>
                    Hints can be configured to be hidden / visible depending on the state of the
                    field. This is controlled by the <u>display</u> property. The default value
                    for this property is <u>pristine|valid</u>. It's the list of states for which
                    the hint should be visible separated by <u>|</u>. Three values are supported:
                    <u>pristine</u>, <u>valid</u> and <u>error</u>.
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
