import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/player';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import PlayerList from './../imports/ui/PlayerList';

Meteor.startup(() => {
    // Call tracker.autorun
    // create variable called players -> set equal to fetch
    // Render players to the screen
    Tracker.autorun(() => {
        let players = Players.find().fetch();
        let title = 'Score Keeper';
        let subtitle = 'Created by Hao Zheng';
        let jsx = (
            <div>
                <TitleBar title={title} subtitle={subtitle}/>
                <PlayerList players={players}/>
                <AddPlayer score={10}/>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});