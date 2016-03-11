
import { Link } from 'react-router';
import React from 'react';

/**
 * The main page of the website.
 */
export default class Main extends React.Component {
    /**
     * Renders the form.
     */
    render() {
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
                        <Link className="link" to="/guide">
                            Guide
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
                        Created by <a href="https://github.com/lud2k">Lud2k</a>
                    </div>
                </div>
            </div>
        );
    }
}
