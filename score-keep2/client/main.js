import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/player';

const renderPlayers = function(playerList) {
    return playerList.map(function(player){
        return <p key={player.key}>{player.name} has {player.score} point(s).</p>;
    })
};

const handleSubmit = function(e) {
    let playerName = e.target.playerName.value;
   e.preventDefault();
   if (playerName) {
        e.target.playerName.value = "";
       Players.insert({
           name: playerName,
           score: 13
       })
   }
}

Meteor.startup(function() {
    // Call tracker.autorun
    // create variable called players -> set equal to fetch
    // Render players to the screen
    Tracker.autorun(function() {
        let players = Players.find().fetch();
        let name = 'Andrew';
        let title = 'This is a Title';
        let jsx = (
            <div>
                {/* Render h1 tag */}
                <h1>{title}</h1>
                <p>This is from {name}</p>
                <p>This is the second</p>
                {renderPlayers(players)}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player name"/>
                    <button>Add Player</button>
                </form>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});