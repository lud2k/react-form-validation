
import { Link } from 'react-router';
import React from 'react';

/**
 * The examples page of the website.
 */
export default class Guide extends React.Component {
    /**
     * Renders the page.
     */
    render() {
        return (
            <div id="guide" className="content">
                <div className="side-menu">
                    <h4> Basics </h4>
                    <Link to="/guide/basic"> Form </Link>
                    <Link to="/guide/hints"> Hints </Link>
                    <Link to="/guide/errors"> Errors </Link>
                    <h4> Advanced </h4>
                    <Link to="/guide/lists"> Lists </Link>
                    <Link to="/guide/naming"> Advanced Naming </Link>
                    <Link to="/guide/custom-field"> Custom Field </Link>
                    <Link to="/guide/custom-rule"> Custom Rule </Link>
                    <Link to="/guide/wysiwyg"> CKEditor </Link>
                </div>
                <div className="side-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
