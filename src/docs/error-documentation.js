
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
                <div className="paragraph">
                    The <i>Error</i> component displays errors for a given field
                </div>
                <Code value={ErrorTag} />
            </div>
        );
    }
}
