
import { Error, Input, Hint } from 'react-form-validation';

/**
 * Friend item form.
 */
export default class AddressForm extends React.Component {
    render() {
        var prefix = this.props.type + '.';
        return (
            <div className="fieldset address">
                <b>{this.props.type} address</b>
                <div className="field">
                    Address: <Input type="text" name={prefix + 'address'} />
                    <Error htmlFor={prefix + 'address'} />
                    <Hint htmlFor={prefix + 'address'} text="123 5th road, city, zip code, country" />
                </div>
                <div className="field">
                    Phone: <Input type="text" name={prefix + 'phone'} />
                    <Error htmlFor={prefix + 'phone'} />
                    <Hint htmlFor={prefix + 'phone'} text="+1 000-000-0000" />
                </div>
            </div>
        );
    }
}
