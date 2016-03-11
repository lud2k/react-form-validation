
import Modal from './modal.js';
import Code from './code.js';

/**
 * The main page of the website.
 */
export default class Utils extends React.Component {
    /**
     * Util method to give the Form.onSubmit callback.
     * Shows the form data is the form was valid.
     */
    static onFormSubmitted(event, valid, data) {
        if (valid) {
            // prevent form submission
            event.preventDefault();

            // show form data
            Modal.show({
                title: 'Form submitted is valid!',
                content: (
                    <div>
                        <p> Here is the current fom data. </p>
                        <Code type="json" value={JSON.stringify(data, null, 4)} />
                    </div>
                )
            });
        }
    }

    /**
     * Util method that validates the form and shows its data.
     */
    static onClickShowData(context) {
        var result = context.validate(null, false);
        Modal.show({
            title: 'Form data',
            content: (
                <div>
                    <p>
                        The form <u>{result.valid ? 'is valid' : 'contains errors'}</u>.<br />
                    </p>
                    <p>
                        Here is the current fom data.
                    </p>
                    <Code type="json" value={JSON.stringify(result.data, null, 4)} />
                </div>
            )
        });
    }
}
