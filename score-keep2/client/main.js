import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
    _id: '1',
    name: 'walker',
    score: 35
}, {
    _id: '2',
    name: 'fandy',
    score: 3
}];

const renderPlayers = function(playerList) {
    return playerList.map(function(player){
        return <p key={player.key}>{player.name} has {player.score} point(s).</p>;
    })
};


Meteor.startup(function() {
    let name = 'Andrew';
    let title = 'This is a Title';
    let jsx = (
    <div>
        {/* Render h1 tag */}
        <h1>{title}</h1>
        <p>This is from {name}</p>
        <p>This is the second</p>
    {renderPlayers(players)}
    </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
});