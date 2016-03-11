
import { Link } from 'react-router';
import React from 'react';

/**
 * The documentation page of the website.
 */
export default class Documentation extends React.Component {
    /**
     * Renders the page.
     */
    render() {
        return (
            <div id="documentation" className="content">
                <div className="side-menu">
                    <h4>Classes</h4>
                    <Link to="/documentation/context-class"> Context Class </Link>
                    <Link to="/documentation/rules-class"> Rules Class </Link>
                    <Link to="/documentation/field-class"> Field Class </Link>
                    <h4>Compontents</h4>
                    <Link to="/documentation/form-component"> &lt;Form&gt; Component </Link>
                    <Link to="/documentation/input-component"> &lt;Input&gt; Component </Link>
                    <Link to="/documentation/select-component"> &lt;Select&gt; Component </Link>
                    <Link to="/documentation/error-component"> &lt;Error&gt; Component </Link>
                    <Link to="/documentation/hint-component"> &lt;Hint&gt; Component </Link>
                </div>
                <div className="side-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
