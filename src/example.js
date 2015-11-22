
var Link = require('react-router').Link;

/**
 * The examples page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Examples',

    /**
     * Renders the page.
     */
    render: function() {
        return (
            <div id="documentation" className="content">
                <div className="side-menu">
                    <h4>Examples</h4>
                    <Link to="/example/login"> Login Form </Link>
                    <Link to="/example/register"> Registration Form </Link>
                    <Link to="/example/list"> List Form </Link>
                    <Link to="/example/custom-field"> Custom Field </Link>
                    <Link to="/example/custom-rule"> Custom Rule </Link>
                </div>
                <div className="side-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
});
