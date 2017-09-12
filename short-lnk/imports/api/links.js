import {Meteor} from 'meteor/meteor';
import {Mongo}  from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
    Meteor.publish('links', function () {
        return Links.find({userId: this.userId});
    });
}

Meteor.methods({
    greetUser: function(name){
        console.log('greetUser is running');
        if (!name) {
            throw new Meteor.Error('name is required', 'invalide - common');
        }
        return `Hello ${name}!`;
    },
    addNumbers: function(num1, num2) {
        console.log('add number is running');
        if (!(typeof num1 === 'number' && typeof num2 ===  'number')) {
            throw new Meteor.Error('invalid arguments', 'expecting two numbers');
        }
        return num1 + num2;
    }
});
