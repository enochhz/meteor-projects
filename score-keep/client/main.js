import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
    _id: '1',
    name: 'Walker',
    score: 102
}, {
    _id: '2',
    name: 'Fandy',
    score: -1
}, {
    _id: '4',
    name: 'Kitty',
    score: -13
}];

const renderPlayers = function(playersList) {
    return playersList.map(function(player) {
       return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
    });
};

Meteor.startup(function(){
    let name = 'Walker';
    // title -> Account Settings
    let title = 'Socre Keep';
    let jsx = (
        <div>
            <h1>{title}</h1>
            <p>Hello {name}</p>
            <p>Second p.</p>
            {renderPlayers(players)}
        </div>
    );
    ReactDom.render(jsx, document.getElementById('app'));
});
