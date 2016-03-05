
// imports
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import Main from './main.js';
import Install from './install.js';

// example pages
import Example from './example.js';
import LoginExample from './examples/login-example.js';
import RegisterExample from './examples/register-example.js';
import ListExample from './examples/list-example.js';
import CustomFieldExample from './examples/custom-field-example.js';
import CustomRuleExample from './examples/custom-rule-example.js';

// documentation pages
import Documentation from './documentation.js';
import RulesClassDocumentation from './docs/rules-documentation.js';
import InstanceClassDocumentation from './docs/instance-documentation.js';
import FormComponentDocumentation from './docs/form-documentation.js';
import InputComponentDocumentation from './docs/input-documentation.js';
import ErrorComponentDocumentation from './docs/error-documentation.js';
import HintComponentDocumentation from './docs/hint-documentation.js';
import SelectComponentDocumentation from './docs/select-documentation.js';
import ListenerMixinDocumentation from './docs/listener-mixin-documentation.js';
import FieldMixinDocumentation from './docs/field-mixin-documentation.js';

ReactDOM.render((
    <Router history={createHashHistory({queryKey: false})}>
        <Route path="/" component={Main}>
            <IndexRoute component={Install}/>
            <Route path="install" component={Install} />
            <Route path="example" component={Example}>
                <IndexRoute component={LoginExample}/>
                <Route path="login" component={LoginExample} />
                <Route path="register" component={RegisterExample} />
                <Route path="list" component={ListExample} />
                <Route path="custom-field" component={CustomFieldExample} />
                <Route path="custom-rule" component={CustomRuleExample} />
            </Route>
            <Route path="documentation" component={Documentation}>
                <IndexRoute component={RulesClassDocumentation}/>
                <Route path="rules-class" component={RulesClassDocumentation} />
                <Route path="instance-class" component={InstanceClassDocumentation} />
                <Route path="form-component" component={FormComponentDocumentation} />
                <Route path="input-component" component={InputComponentDocumentation} />
                <Route path="select-component" component={SelectComponentDocumentation} />
                <Route path="error-component" component={ErrorComponentDocumentation} />
                <Route path="hint-component" component={HintComponentDocumentation} />
                <Route path="listener-mixin" component={ListenerMixinDocumentation} />
                <Route path="field-mixin" component={FieldMixinDocumentation} />
            </Route>
        </Route>
    </Router>
), document.getElementById('main'));
