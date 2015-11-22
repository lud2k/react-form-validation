
var Link = require('react-router').Link;

/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Main',

    /**
     * Renders the form.
     */
    render: function() {
        return (
            <div id="main">
                <div className="header-wrapper">
                    <div className="header">
                        <Link className="logo" to="/">
                            <img src="logo.svg" />
                            React Form Validation
                        </Link>
                        <Link className="link" to="/install">
                            Install
                        </Link>
                        <Link className="link" to="/example">
                            Examples
                        </Link>
                        <Link className="link" to="/documentation">
                            Documentation
                        </Link>
                        <a className="link" href="https://github.com/lud2k/react-form-validation">
                            GitHub
                        </a>
                    </div>
                </div>
                <div className="content-wrapper">
                    {this.props.children}
                </div>
                <div className="footer-wrapper">
                    <div className="footer">
                        Created by <a href="https://github.com/lud2k">Ludovic Cabre</a>
                    </div>
                </div>
            </div>
        );
    }
});
