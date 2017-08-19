import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {/*diplay subtitle prop*/}
                <h4>{this.props.subtitle}</h4>
            </div>
        );
    }
}

TitleBar.propTypes = {
    title : PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};

TitleBar.defaultProps = {
    title : 'Default Title'
};