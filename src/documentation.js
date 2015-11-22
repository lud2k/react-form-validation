
var Link = require('react-router').Link;

/**
 * The documentation page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Documentation',

    /**
     * Renders the page.
     */
    render: function() {
        return (
            <div id="documentation" className="content">
                <div className="side-menu">
                    <h4>Classes</h4>
                    <Link to="/documentation/rules-class"> Rules Class </Link>
                    <Link to="/documentation/instance-class"> Instance Class </Link>
                    <h4>Compontents</h4>
                    <Link to="/documentation/form-component"> &lt;Form&gt; Component </Link>
                    <Link to="/documentation/input-component"> &lt;Input&gt; Component </Link>
                    <Link to="/documentation/select-component"> &lt;Select&gt; Component </Link>
                    <Link to="/documentation/error-component"> &lt;Error&gt; Component </Link>
                    <Link to="/documentation/hint-component"> &lt;Hint&gt; Component </Link>
                    <h4>Mixins</h4>
                    <Link to="/documentation/listener-mixin"> Listener Mixin </Link>
                    <Link to="/documentation/field-mixin"> Field Mixin </Link>
                </div>
                <div className="side-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
});
