
import { Link } from 'react-router';
import ComponentSource from '../../component-source.js';
import ListForm from './list-form.js';
import ListFormText from './list-form.txt';
import FriendFormText from './friend-form.txt';
import ListContextText from './list-context.txt';
import InputNameText from './input-name.html';
import UtilsText from '../../utils.txt';
import Code from '../../code.js'

/**
 * Component that renders an example.
 */
export default class HintsExample extends React.Component {
    /**
     * Renders the example.
     */
    render() {
        return (
            <div className="example">
                <h2>Lists</h2>
                <p>
                    This library also supports validation of lists inside forms. It will also
                    give you the form data as an array.
                </p>
                <h3>Setup</h3>
                <p>
                    Setting lists is very easy. You will need to do two things:
                </p>
                <ul>
                    <li>
                        Name your fields like <u>children[0].name</u>, <u>children[1].name</u>,
                        ...<br /><br />
                        <Code value={InputNameText} />
                    </li>
                    <li>
                        Declare the fields in your context as an object.<br /><br />
                        <Code value={ListContextText} />
                    </li>
                </ul>
                <h3>Example</h3>
                <ComponentSource component={ListForm}
                                 sources={[
                                     {name: 'list-form.jsx', code: ListFormText},
                                     {name: 'friend-form.jsx', code: FriendFormText},
                                     {name: 'utils.jsx', code: UtilsText}
                                 ]} />
            </div>
        );
    }
}
