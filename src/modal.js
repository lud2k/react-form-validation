
import ReactDOM from 'react-dom';
import React from 'react';

/**
 * Code component.
 */
export default class Modal extends React.Component {
    /**
     * Renders an empty div in which CodeMirror will render pretty code.
     */
    render() {
        return (
            <div className="modal" ref="root">
                <div className="background" onClick={this.hide.bind(this)} />
                <div className="popup-wrapper">
                    <div className="popup">
                        <div className="title">
                            {this.props.title}
                        </div>
                        <div className="content">
                            {this.props.content}
                        </div>
                        <div className="actions">
                            <button onClick={this.hide.bind(this)}>Hide</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    /**
     * Hides the modal.
     */
    hide() {
        // remove from the DOM
        this.refs.root.parentNode.removeChild(this.refs.root);
    }

    /**
     * Creates, Renders and Shows the modal.
     */
    static show(props) {
        // create root element
        var root = document.createElement('div')
        document.body.appendChild(root);

        // render modal in new element
        var element = React.createElement(this, props || {});
        ReactDOM.render(element, root);
    }
}
