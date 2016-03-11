
import Code from '../code.js';
import InputTag from './input-tag.html';

/**
 * The main page of the website.
 */
export default class InputDocumentation extends React.Component {
    /**
     * Renders the form.
     */
    render() {
        return (
            <div className="documentation">
                <h2> &lt;Input&gt; Component </h2>
                <p>
                    The <i>Input</i> component displays a normal html input. It works pretty much
                    the exact same way the html input field works.
                </p>
                <Code value={InputTag} />
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
                            transferred, as is, to the original input html tag.
                        </li>
                    </ul>
                </p>
            </div>
        );
    }
}
