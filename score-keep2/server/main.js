import { Meteor } from 'meteor/meteor';
import {Players} from './../imports/api/player';

Meteor.startup(() => {
    let obj = {
        name: 'Andrew',
        printName() {
            console.log(`Name: ${this.name}`);
        }
    };
    setTimeout(obj.printName.bind(obj), 1000);
});
