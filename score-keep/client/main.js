import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';

import App from './../imports/ui/App';

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find().fetch();
        let title = 'Score Keeper', subTitle = 'Created by Hao Zheng';
        ReactDom.render(<App title={title} players={players}/>, document.getElementById('app'));
    });
});
