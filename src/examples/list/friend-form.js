
import { Error, Input, Hint } from 'react-form-validation';

/**
 * Friend item form.
 */
export default class FriendForm extends React.Component {
    render() {
        var prefix = `friend[${this.props.index}].`;
        return (
            <div className="fieldset friend">
                <b>Friend {this.props.index + 1}</b>
                <div className="field">
                    Name: <Input type="text" name={prefix + 'name'} />
                    <Error htmlFor={prefix + 'name'} />
                </div>
                <div className="field">
                    Age: <Input type="text" name={prefix + 'age'} />
                    <Error htmlFor={prefix + 'age'} />
                    <Hint htmlFor={prefix + 'age'} text="This field is an optional integer" />
                </div>
            </div>
        );
    }
}
