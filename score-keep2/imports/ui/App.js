import React from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import PropTypes from 'prop-types';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <TitleBar title={this.props.title} subtitle={this.props.subtitle}/>
                <PlayerList players={this.props.players}/>
                <AddPlayer score={10}/>
            </div>
        );
    }
};

App.propTypes = {
    title : PropTypes.string.isRequired,
    players : PropTypes.array.isRequired
}