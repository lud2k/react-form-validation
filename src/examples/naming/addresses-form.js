
import { Context, Error, Hint, Rules, Form, Input } from 'react-form-validation';
import AddressForm from './address-form.js';
import Utils from '../../utils.js';

/**
 * List example form.
 */
export default class ListForm extends React.Component {
    /**
     * Returns the initial state of the component.
     */
    constructor(props) {
        super(props);

        this.state = {
            context: new Context({
                fields: {
                    home: {
                        address: Rules.required(),
                    },
                    work: {
                        address: Rules.required()
                    }
                }
            })
        };
    }

    /**
     * Renders the form.
     */
    render() {
        return (
            <Form context={this.state.context} onSubmit={Utils.onFormSubmitted}>
                <h4>Addresses</h4>
                <AddressForm type="home" />
                <br />
                <AddressForm type="work" />
                <br />
                <div className="actions">
                    <button type="submit">Submit</button>
                    <button type="button"
                            onClick={Utils.onClickShowData.bind(this, this.state.context)}>
                        Show Data
                    </button>
                </div>
            </Form>
        );
    }
}
