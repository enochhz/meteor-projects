import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';

const renderPlayers = function(playersList) {
    return playersList.map(function(player) {
       return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
    });
};

const handleSubmit = function(e) {
    let playerName = e.target.playerName.value;
    e.preventDefault();
    if (playerName) {
        e.target.playerName.value = "";
        // players insert
        Players.insert( {
            name: playersName,
            score: 0
        });
    }
};

Meteor.startup(function(){
    Tracker.autorun(function() {
        let players = Players.find().fetch();
        let name = 'Walker';
        // title -> Account Settings
        let title = 'Socre Keep';
        let jsx = (
            <div>
                <h1>{title}</h1>
                <p>Hello {name}</p>
                <p>Second p.</p>
                {renderPlayers(players)}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player name"/>
                    <button>Add Player</button>
                </form>
            </div>
        );
        ReactDom.render(jsx, document.getElementById('app'));
    });
});
