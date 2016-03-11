
import Code from '../code.js';
import ContextBasicUsageText from './context-basic-usage.txt';
import ContextHierarchyUsageText from './context-hierarchy-usage.txt';
import ContextHierarchy2UsageText from './context-hierarchy2-usage.txt';
import ContextHierarchyOutputText from './context-hierarchy-output.txt';
import ContextHierarchy2OutputText from './context-hierarchy2-output.txt';

/**
 * The main page of the website.
 */
export default class InstanceDocumentation extends React.Component {
    /**
     * Renders the form.
     */
    render() {
        return (
            <div className="documentation">
                <h2> Context Class </h2>
                <div className="documentation-content">
                    <p>
                        The Context class is the magic object that takes care of validating
                        the form and communicating changes to components.<br />
                        All forms need a valid context! This context should be created once and
                        should not be changed.
                    </p>
                    <h3>Basic usage</h3>
                    <Code value={ContextBasicUsageText} />
                    <p>
                        As you can see it's pretty simple. The only thing that you need to give
                        to create a Context is a list of fields and rules for each fields.
                    </p>
                    <h3>Giving the context to components</h3>
                    <h4>Required for &lt;Form&gt;</h4>
                    <p>
                        The only place where a Context instance is required is in the Form
                        component.
                    </p>
                    <Code>
                        {'<Form context={context}> ... </Form>'}
                    </Code>
                    <br />
                    <h4>Optional for &lt;Input&gt;, &lt;Select&gt;, &lt;Error&gt;, ...</h4>
                    <p>
                        The Context instance is automatically shared to children components.
                        The Input, Select, Error and Hint components all support an optional
                        <i>context</i> property but you probably won't need it. The only use case
                        for using it would be having a component outside the Form (which would not
                        make much sense).
                    </p>
                    <h3>Fancy advanced hierarchies</h3>
                    <h4>Form with lists</h4>
                    <p>
                        If you have a form with a list you can declare it as follows.
                    </p>
                    <Code value={ContextHierarchyUsageText} />
                    <p>
                        In the above case, you will need to give your fields a name like{' '}
                        <u>children[0].name</u>,{' '}
                        <u>children[0].birthDate</u>{' '}
                        The library will figure out that children is a list (implicitly detected
                        because of the [0] in the name) and will validate things accordingly.
                    </p>
                    <p>
                        Here is an example of what the form data will look like.
                    </p>
                    <Code value={ContextHierarchyOutputText} />
                    <h4>Form with objects</h4>
                    <p>
                        You can also make forms that are no flat.
                    </p>
                    <Code value={ContextHierarchy2UsageText} />
                    <p>
                        This allows you to reuse partial form components. For this to work the
                        fields should have a name like{' '}
                        <u>home.address</u>,{' '}
                        <u>work.phone</u>{' '}
                        The library will figure out that those are sub forms and will validate
                        them properly. The form data will also contain those objects.
                    </p>
                    <p>
                        Here is an example of what the form data will look like.
                    </p>
                    <Code value={ContextHierarchy2OutputText} />
                </div>
            </div>
        );
    }
}
