
import { Context, Error, Hint, Rules, Form, Input } from 'react-form-validation';

/**
 * Friend item form.
 */
export default class FriendForm extends React.Component {
    render() {
        var prefix = `friend[${this.props.index}]`;
        return (
            <div className="fieldset friend">
                <b>Friend {this.props.index + 1}</b>
                <div className="field">
                    Name: <Input type="text" name={prefix + 'name'} />
                    <Error forName={prefix + 'name'} />
                </div>
                <div className="field">
                    Age: <Input type="text" name={prefix + 'age'} />
                    <Error forName={prefix + 'age'} />
                </div>
            </div>
        );
    }
}

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
            form: new Context({
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
     * Renders the form.
     */
    renderFriendFields(form) {
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
        var form = this.state.form;
        return (
            <Form form={form} onSubmit={this.props.formSubmitted}>
                <h4>Friend List</h4>
                { this.renderFriendFields(form) }
                <div className="actions">
                    <button type="button" onClick={this.onClickAddFriend.bind(this)}>Add Friend</button>
                    <button>Validate</button>
                </div>
            </Form>
        );
    }
}
