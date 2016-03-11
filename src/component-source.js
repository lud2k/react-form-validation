
import ReactDOM from 'react-dom';
import React from 'react';
import Code from './code.js';

/**
 * Code component.
 */
export default class ComponentSource extends React.Component {
    /**
     * Constructor.
     */
    constructor(props) {
        super(props);

        this.state = {
            tab: 'preview'
        };
    }

    /**
     * Called when a user clicks on a tab.
     */
    onClickTab(name, event) {
        event.preventDefault();

        this.setState({
            tab: name
        });
    }

    /**
     * Renders the source tabs.
     */
    renderSourceTabs(sources) {
        return sources.map(source => {
            return (
                <a className="tab" key={source.name}
                   onClick={this.onClickTab.bind(this, source.name)}
                   data-selected={this.state.tab === source.name}>
                    {source.name}
                </a>
            );
        });
    }

    /**
     * Renders the content of the preview.
     */
    renderContent() {
        if (this.state.tab === 'preview') {
            return (
                <div className="content component">
                    <this.props.component />
                </div>
            );
        } else {
            var sources = this.props.sources;
            for (var i=0; i<sources.length; i++) {
                if (sources[i].name === this.state.tab) {
                    return (
                        <div className="content source">
                            <Code value={sources[i].code} key={sources[i].name}
                                  scrollable={false} />
                        </div>
                    );
                }
            }
        }
    }

    /**
     * Renders the preview and source code.
     */
    render() {
        return (
            <div className="component-source">
                <div className="tabs">
                    <a className="tab" onClick={this.onClickTab.bind(this, 'preview')}
                       data-selected={this.state.tab === 'preview'}>
                        preview
                    </a>
                    {this.renderSourceTabs(this.props.sources)}
                </div>
                {this.renderContent()}
            </div>
        );
    }
}
