
import { Context, Error, Rules, Form, Input, Hint } from 'react-form-validation';
import CKEditor from './ckeditor.js';
import Utils from '../../utils.js';

/**
 * Custom rule form.
 */
export default class CustomRuleForm extends React.Component {
    /**
     * Returns the initial state of the component.
     */
    constructor(props) {
        super(props);

        this.state = {
            context: new Context({
                fields: {
                    content: Rules.required().minLength(15)
                }
            })
        };
    }

    /**
     * Called when the component is mounted.
     */
    componentDidMount() {
        // validate fields to show errors
        this.state.context.validate(null, true);
    }

    /**
     * Renders the form.
     */
    render() {
        return (
            <Form context={this.state.context} onSubmit={Utils.onFormSubmitted}>
                <h4>CKEditor</h4>
                <div className="field">
                    <CKEditor name="content" />
                    <Error htmlFor="content" />
                    <Hint htmlFor="content" text="Should be at least 15 characters
                        (the field value is html so less is required)" />
                </div>
                <div className="actions">
                    <button>Submit</button>
                    <button type="button"
                            onClick={Utils.onClickShowData.bind(this, this.state.context)}>
                        Show Data
                    </button>
                </div>
            </Form>
        );
    }
}
