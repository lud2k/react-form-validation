
import Code from '../code.js';
import SelectTag from './select-tag.html';

/**
 * The main page of the website.
 */
export default class SelectDocumentation extends React.Component {
    /**
     * Renders the form.
     */
    render() {
        return (
            <div className="documentation">
                <h2> &lt;Select&gt; Component </h2>
                <p>
                    The <i>Select</i> component behaves the same way as the select html tag.
                </p>
                <Code value={SelectTag} />
                <h3> Properties </h3>
                <p>
                    <ul>
                        <li>
                            <b>name</b> (required): The name of the input.
                        </li>
                        <li>
                            <b>context</b> (optional): A valid form context object.
                        </li>
                        <li>
                            <b>...</b>: All other properties set on this component will be
                            transferred, as is, to the original select html tag.
                        </li>
                    </ul>
                </p>
            </div>
        );
    }
}
