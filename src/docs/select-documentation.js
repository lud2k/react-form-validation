
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
                <div className="paragraph">
                    The <i>Select</i> component behaves the same way as the select html tag.
                </div>
                <Code value={SelectTag} />
            </div>
        );
    }
}
