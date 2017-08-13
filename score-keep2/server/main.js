import { Meteor } from 'meteor/meteor';
import {Players} from './../imports/api/player';

Meteor.startup(function(){
    Players.insert({
        name: 'fandy',
        score: 45
    });
    console.log(Players.find().fetch());
});
