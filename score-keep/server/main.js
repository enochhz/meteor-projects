import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
    console.log(Players.find().fetch());
});

// Object Spread Operator
let user = {
    name: 'Andrew',
    location: 'London',
    age: 0
}

let person = {
    age: 25,
    ...user,
};

// console.log(person);

// Object property Shorthand
let bike = 'Scott';
let stuff = {
    bike: bike,
    laptop: 'Mac'
};

// console.log(stuff);

let house = {
    bedrooms: 2,
    bathrooms: 1.5
};
let yearBuilt = 1995;

console.log({
    ...house,
    bedrooms: 3,
    yearBuilt,
    flooring: 'Carpet'
});