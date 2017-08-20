import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
    renderSubtitle() {
        if (this.props.subtitle) {
            return <h4>{this.props.subtitle}</h4>;
        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.renderSubtitle()}
            </div>
        );
    }
}

TitleBar.propTypes = {
    title : PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

TitleBar.defaultProps = {
    title : 'Default Title'
};