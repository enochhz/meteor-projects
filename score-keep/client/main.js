import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';

import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import Player from './../imports/ui/Player';
import PlayerList from './../imports/ui/PlayerList';

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find().fetch();
        let title = 'Score Keeper', subTitle = 'Created by Hao Zheng';
        let jsx = (
            <div>
                <TitleBar title={title} subTitle={subTitle}/>
                <PlayerList players={players}/>
                <AddPlayer score={0}/>
            </div>
        );
        ReactDom.render(jsx, document.getElementById('app'));
    });
});
