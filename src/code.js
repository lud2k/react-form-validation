
import ReactDOM from 'react-dom';
import React from 'react';

/**
 * Code component.
 */
export default class Code extends React.Component {
    /**
     * Called when the component is mounted.
     */
    componentDidMount() {
        var ele = this.refs.root,
            value = this.props.value;
        if (!value && this.props.children) {
            if (this.props.children.map) {
                value = this.props.children.map(function(child) { return child.toString() }).join('');
            } else {
                value = this.props.children;
            }
        }

        try {
            // render code
            var doc = CodeMirror(ele, {
                value: value.replace(/    /g, '\t').trim(),
                mode: this.props.mode,
                readOnly: true,
                tabSize: 2
            });

            if (this.props.highlight) {
                this.props.highlight.forEach(function (item) {
                    doc.markText({line: item.from}, {line: item.to}, {css: 'background-color: #FFF2B0'});
                });
            }
        } catch(e) {
            console.error('failed to render code', this);
        }
    }

    /**
     * Renders an empty div in which CodeMirror will render pretty code.
     */
    render() {
        return <div className="code" ref="root" />;
    }
}

Code.defaultProps = {
    mode: 'javascript'
};
