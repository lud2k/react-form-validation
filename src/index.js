
// render page
var ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    createHashHistory = require('history/lib/createHashHistory'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Main = require('./main.js'),
    Install = require('./install.js'),
    // example pages
    Example = require('./example.js'),
    LoginExample = require('./examples/login-example.js'),
    RegisterExample = require('./examples/register-example.js'),
    ListExample = require('./examples/list-example.js'),
    CustomFieldExample = require('./examples/custom-field-example.js'),
    CustomRuleExample = require('./examples/custom-rule-example.js'),
    // documentation pages
    Documentation = require('./documentation.js'),
    RulesClassDocumentation = require('./docs/rules-documentation.js'),
    InstanceClassDocumentation = require('./docs/instance-documentation.js'),
    FormComponentDocumentation = require('./docs/form-documentation.js'),
    InputComponentDocumentation = require('./docs/input-documentation.js'),
    ErrorComponentDocumentation = require('./docs/error-documentation.js'),
    HintComponentDocumentation = require('./docs/hint-documentation.js'),
    SelectComponentDocumentation = require('./docs/select-documentation.js'),
    ListenerMixinDocumentation = require('./docs/listener-mixin-documentation.js'),
    FieldMixinDocumentation = require('./docs/field-mixin-documentation.js');

ReactDOM.render((
    <Router history={createHashHistory()}>
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
