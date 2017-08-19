import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/player';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';

const renderPlayers = (playerList) => {
    return playerList.map((player) => {
        return (
            <p key={player._id}>
                {player.name} has {player.score} point(s).
                <button onClick={() => Players.update({_id: player._id}, {$inc: {score: -1}})}>-1</button>
                {/*// short cuts */}
                <button onClick={() => Players.update(player._id, {$inc: {score: 1}})}>+1</button>
                <button onClick={() => Players.remove(player._id)}>X</button>
            </p>
        );
    })
};

const handleSubmit = (e) => {
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

Meteor.startup(() => {
    // Call tracker.autorun
    // create variable called players -> set equal to fetch
    // Render players to the screen
    Tracker.autorun(() => {
        let players = Players.find().fetch();
        let name = 'Andrew';
        let jsx = (
            <div>
                <TitleBar/>
                <p>This is from {name}</p>
                {renderPlayers(players)}
                <div/>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player name"/>
                    <button>Add Player</button>
                </form>
                <AddPlayer/>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});