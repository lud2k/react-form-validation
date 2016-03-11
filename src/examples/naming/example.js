
import { Link } from 'react-router';
import ComponentSource from '../../component-source.js';
import AddressesForm from './addresses-form.js';
import AddressesFormText from './addresses-form.txt';
import AddressFormText from './address-form.txt';
import NamingContextText from './naming-context.txt';
import InputNameText from './input-name.html';
import UtilsText from '../../utils.txt';
import Code from '../../code.js'

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
                <h2>Advanced Naming</h2>
                <p>
                    This library also handles validation of sub forms. This is useful when your
                    form data isn't flat or when you have part of the form that gets repeated.
                </p>
                <h3>Setup</h3>
                <p>
                    Setting it up is very easy. You will need to do two things:
                </p>
                <ul>
                    <li>
                        Name your fields like <u>home.address</u>, <u>work.address</u>,
                        ...<br /><br />
                        <Code value={InputNameText} />
                    </li>
                    <li>
                        Declare the fields in your context as an object.<br /><br />
                        <Code value={NamingContextText} />
                    </li>
                </ul>
                <h3>Example</h3>
                <ComponentSource component={AddressesForm}
                                 sources={[
                                     {name: 'addresses-form.jsx', code: AddressesFormText},
                                     {name: 'address-form.jsx', code: AddressFormText},
                                     {name: 'utils.jsx', code: UtilsText}
                                 ]} />
            </div>
        );
    }
}
