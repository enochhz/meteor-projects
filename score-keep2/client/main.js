import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/player';
import App from './../imports/ui/App';

Meteor.startup(() => {
    // Call tracker.autorun
    // create variable called players -> set equal to fetch
    // Render players to the screen
    Tracker.autorun(() => {
        let players = Players.find({}, {sort: {score: -1}}).fetch();
        let title = 'Score Keeper';
        let subtitle = 'Created by Hao Zheng';
        ReactDOM.render(<App title={title} subtitle={subtitle} players={players}/>, document.getElementById('app'));
    });
});