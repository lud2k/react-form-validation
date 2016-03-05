
import Code from '../code.js';
import HintTag from './hint-tag.html';

/**
 * The main page of the website.
 */
export default class HintDocumentation extends React.Component {
    /**
     * Renders the form.
     */
    render() {
        return (
            <div className="documentation">
                <h2> &lt;Hint&gt; Component </h2>
                <div className="paragraph">
                    The <i>Hint</i> component displays a hint depending on the state of a field.
                </div>
                <Code value={HintTag} />
            </div>
        );
    }
}
