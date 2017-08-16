import { Meteor } from 'meteor/meteor';
import {Players} from './../imports/api/player';

Meteor.startup(() => {
    // Players.insert({
    //     name: 'walker',
    //     score: 45
    // });
    // console.log(Players.find().fetch());
    // let square = (x, y) => x * y;
    // let square2 = function(x, y){
    //     return x + y;
    // }
    // console.log(square(3,5));
    // console.log(square2(3,5));
    //
    // let user = {
    //     name: 'Andrew',
    //     sayHi () {
    //         setTimeout(() => {
    //            console.log(this.name);
    //         }, 1000);
    //     }
    // };
    // user.sayHi(1, 2);
    // let numbers = [9, 99, 4, 56];
    // let newNumbers = numbers.map((number)=> number + 1);
    // console.log(newNumbers);
});
