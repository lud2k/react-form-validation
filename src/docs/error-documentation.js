
import Code from '../code.js';
import ErrorTag from './error-tag.html';

/**
 * The main page of the website.
 */
export default class ErrorDocumentation extends React.Component {
    /**
     * Renders the form.
     */
    render() {
        return (
            <div className="documentation">
                <h2> &lt;Error&gt; Component </h2>
                <p>
                    The <i>Error</i> component displays errors for a field when invalid.<br />
                    This just renders a label tag with className "error".
                </p>
                <Code value={ErrorTag} />
                <h3> Properties </h3>
                <p>
                    <ul>
                        <li>
                            <b>htmlFor</b> (required): The name of the field for which to display
                            the error.
                        </li>
                        <li>
                            <b>context</b> (optional): A valid form context object.
                        </li>
                        <li>
                            <b>...</b>: All other properties set on this component will be
                            transferred, as is, to the original label html tag.
                        </li>
                    </ul>
                </p>
            </div>
        );
    }
}
