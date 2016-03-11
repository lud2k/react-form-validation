
import { Link } from 'react-router';

/**
 * The field class documentation page.
 */
export default class FieldDocumentation extends React.Component {
    /**
     * Renders the form.
     */
    render() {
        return (
            <div className="documentation">
                <h2> Field Class </h2>
                <p>
                    The <i>Field</i> class makes it a bit easier to create a custom field.<br />
                </p>
                <p>
                    This class really doesn't do much if you look at its source code. It takes care
                    of (un)registering the component with the form context when (un)mounted.
                    It contains a method <u>validateField(force)</u> that tells the form to validate
                    the field.
                </p>
                <p>
                    To better understand how to use it, please refer to{' '}
                    <Link to="/guide/custom-field">this example</Link>.
                </p>
                <h3> Requirements </h3>
                <p>
                    Here is a list of things you will need to do in order to make a custom field.
                </p>
                <ul>
                    <li>
                        Create a component that extends the Field class.
                    </li>
                    <li>
                        Create a <u>getValue()</u> method in your component.
                    </li>
                    <li>
                        Call <u>this.validateField(false)</u> when the component value changes.
                    </li>
                    <li>
                        Call <u>this.validateField(true)</u> when the component looses focus.
                    </li>
                    <li>
                        Give a <u>name</u> property when using your component.
                    </li>
                </ul>
                <h3> Documentation </h3>
                <p>
                    Here are the functions defined in the Field class
                </p>
                <h4> Field.validateField(force) </h4>
                <p>
                    This functions needs to be called when your component's value changes and when
                    your component looses focus. The <u>force</u> parameter should be true when
                    the component looses focus. If <u>force</u> is false, the library will only
                    validate the field if it was validated before. This avoids having error showing
                    up as soon as you type something.
                </p>
                <h4> Field.componentWillMount() </h4>
                <p>
                    React's function. If you component implements this method, make sure it calls
                    its super.
                </p>
                <h4> Field.componentWillUnmount() </h4>
                <p>
                    React's function. If you component implements this method, make sure it calls
                    its super.
                </p>
            </div>
        );
    }
}
