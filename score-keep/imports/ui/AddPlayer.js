import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
    handleSubmit(event) {
        let playerName = event.target.playerName.value;

        event.preventDefault();

        if (playerName) {
            event.target.playerName.value = "";
            Players.insert({
                name: playerName,
                score: this.props.score
            });
        } else {
            alert('You must enter your name');
        }
    }

    render() {
        return (
            <div className="item">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type='text' name='playerName' placeholder='Player name'/>
                    <button>Add Player</button>
                </form>
            </div>
        );
    }
}