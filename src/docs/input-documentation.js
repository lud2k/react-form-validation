
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
                <div className="paragraph">
                    The <i>Rules</i> class is used by this library in order to validate field values.
                </div>
                <Code value={InputTag} />
            </div>
        );
    }
}
