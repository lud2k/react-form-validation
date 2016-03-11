
import { Context, Error, Hint, Rules, Form, Input } from 'react-form-validation';
import FriendForm from './friend-form.js';
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
                    friend: {
                        name: Rules.required(),
                        age: Rules.optional().integer()
                    }
                }
            }),
            nbFriends: 2
        };
    }

    /**
     * Called when the user clicks "add friend".
     */
    onClickAddFriend() {
        this.setState({
            nbFriends: this.state.nbFriends+1
        });
    }

    /**
     * Renders the friends forms.
     */
    renderFriendForms() {
        var ret = [];
        for (var i=0; i<this.state.nbFriends; i++) {
            ret.push(<FriendForm key={i} index={i} />);
        }
        return ret;
    }

    /**
     * Renders the form.
     */
    render() {
        return (
            <Form context={this.state.context} onSubmit={Utils.onFormSubmitted}>
                <h4>Friend List</h4>
                { this.renderFriendForms() }
                <div className="actions">
                    <button type="button" onClick={this.onClickAddFriend.bind(this)}>Add Friend</button>
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
