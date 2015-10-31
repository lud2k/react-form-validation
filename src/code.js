
/**
 * The main page of the website.
 */
module.exports = React.createClass({
    /**
     * Name of the component.
     */
    displayName: 'Code',

    /**
     * Returns the default properties.
     */
    getDefaultProps: function() {
        return {
            mode: 'javascript',

        };
    },

    /**
     * Called when the component is mounted.
     */
    componentDidMount: function() {
        var ele = React.findDOMNode(this),
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
                value: value.trim(),
                mode: this.props.mode,
                readOnly: true
            });

            if (this.props.highlight) {
                this.props.highlight.forEach(function (item) {
                    doc.markText({line: item.from}, {line: item.to}, {css: 'background-color: #FFF2B0'});
                });
            }
        } catch(e) {
            console.error('failed to render code', this);
        }
    },


    /**
     * Renders an empty div in which CodeMirror will render pretty code.
     */
    render: function() {
        return <div className="code" />;
    }
});
