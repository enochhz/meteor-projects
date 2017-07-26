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
        }
    }

    render() {
        return (
            <div className="item">
                {this.props.children}
                <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                    <input className='form_input' name='playerName' placeholder='Player name'/>
                    <button className="button">Add Player</button>
                </form>
            </div>
        );
    }
}