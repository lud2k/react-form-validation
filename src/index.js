
// imports
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import Main from './main.js';
import Install from './install.js';
import Introduction from './introduction.js';

// example pages
import Guide from './guide.js';
import BasicExample from './examples/basic/example.js';
import HintsExample from './examples/hints/example.js';
import ErrorsExample from './examples/errors/example.js';
import ListExample from './examples/list/example.js';
import NamingExample from './examples/naming/example.js';
import CustomFieldExample from './examples/custom-field/example.js';
import CustomRuleExample from './examples/custom-rule/example.js';
import WysiwygExample from './examples/wysiwyg/example.js';

// documentation pages
import Documentation from './documentation.js';
import RulesClassDocumentation from './docs/rules-documentation.js';
import ContextClassDocumentation from './docs/context-documentation.js';
import FieldDocumentation from './docs/field-documentation.js';
import FormComponentDocumentation from './docs/form-documentation.js';
import InputComponentDocumentation from './docs/input-documentation.js';
import ErrorComponentDocumentation from './docs/error-documentation.js';
import HintComponentDocumentation from './docs/hint-documentation.js';
import SelectComponentDocumentation from './docs/select-documentation.js';

// create history
var history = createHashHistory({queryKey: false});
history.listen(function (location) {
    try {
        window.ga('send', 'pageview', location.pathname);
    } catch(e) {}
});

ReactDOM.render((
    <Router history={history}>
        <Route path="/" component={Main}>
            <IndexRoute component={Introduction}/>
            <Route path="intro" component={Introduction} />
            <Route path="install" component={Install} />
            <Route path="guide" component={Guide}>
                <IndexRoute component={BasicExample}/>
                <Route path="basic" component={BasicExample} />
                <Route path="hints" component={HintsExample} />
                <Route path="errors" component={ErrorsExample} />
                <Route path="lists" component={ListExample} />
                <Route path="naming" component={NamingExample} />
                <Route path="custom-field" component={CustomFieldExample} />
                <Route path="custom-rule" component={CustomRuleExample} />
                <Route path="wysiwyg" component={WysiwygExample} />
            </Route>
            <Route path="documentation" component={Documentation}>
                <IndexRoute component={ContextClassDocumentation}/>
                <Route path="context-class" component={ContextClassDocumentation} />
                <Route path="rules-class" component={RulesClassDocumentation} />
                <Route path="field-class" component={FieldDocumentation} />
                <Route path="form-component" component={FormComponentDocumentation} />
                <Route path="input-component" component={InputComponentDocumentation} />
                <Route path="select-component" component={SelectComponentDocumentation} />
                <Route path="error-component" component={ErrorComponentDocumentation} />
                <Route path="hint-component" component={HintComponentDocumentation} />
            </Route>
        </Route>
    </Router>
), document.getElementById('main'));
