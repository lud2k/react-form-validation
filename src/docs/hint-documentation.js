
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
                <p>
                    The <i>Hint</i> component displays a hint depending on the state of a field.<br />
                    This just renders a label tag with className "hint".
                </p>
                <Code value={HintTag} />
                <h3> Properties </h3>
                <p>
                    <ul>
                        <li>
                            <b>htmlFor</b> (required): The name of the field for which to display
                            the hint.
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
