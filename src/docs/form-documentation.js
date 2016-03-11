
import Code from '../code.js';
import FormTag from './form-tag.html';
import FormTagUsageText from './form-tag-usage.txt';

/**
 * The main page of the website.
 */
export default class FormDocumentation extends React.Component {
    /**
     * Renders the form.
     */
    render() {
        return (
            <div className="documentation">
                <h2> &lt;Form&gt; Component </h2>
                <p>
                    The <i>Form</i> component is a wrapped aroung the html form tag.
                <p>
                </p>
                    You have to use this component in order for the form validation to work.
                    The component validates the form when it is submitted by the user. The
                    component will prevent form submission if it is invalid.
                </p>
                <Code value={FormTag} />
                <h3> Properties </h3>
                <p>
                    <ul>
                        <li>
                            <b>context</b> (required): A valid form context object.
                        </li>
                        <li>
                            <b>onSubmit(event, valid, data, form)</b>: If set, this callback will
                            be called when the form is submitted.
                            <ul>
                                <li>
                                    <b>event</b> (Event): the JavaScript event
                                </li>
                                <li>
                                    <b>valid</b> (boolean): True if the form is valid, false
                                    otherwise
                                </li>
                                <li>
                                    <b>data</b> (object): A nicely organized object containing the
                                    data of the form.
                                </li>
                                <li>
                                    <b>form</b> (object): The raw result of the form validation.
                                    Contains the DOM nodes and values of the form.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <b>noValidate</b>: Setting this property has no effect. This component
                            forces the value true to prevent the browser to interfere with the
                            library.
                        </li>
                        <li>
                            <b>scrollToError</b> (default: true): Allows you to configure if you
                            would like to automatically scroll to the first error in the page when
                            the form is submitted.
                        </li>
                        <li>
                            <b>scrollToErrorPadding</b> (default: 20): When scrolling to the error
                            this defines the minimum padding with the window. Useful when you have
                            part of your page that
                            is <u>position: fixed</u>.
                        </li>
                        <li>
                            <b>preventSubmit</b> (default: false): Controls whether the form should
                            be submitted or not when valid. Form submission is always prevented
                            when the form is not valid.
                        </li>
                        <li>
                            <b>...</b>: All other properties set on this component will be
                            transferred, as is, to the original form html tag.
                        </li>
                    </ul>
                </p>
                <h3> Usage </h3>
                <Code value={FormTagUsageText} scrollable={false} />
            </div>
        );
    }
}
