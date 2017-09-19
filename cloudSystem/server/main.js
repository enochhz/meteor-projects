import { Meteor }   from 'meteor/meteor';
import '../imports/api/validate';

export const Patients = new Mongo.Collection('patients');

Meteor.startup(() => {
    Meteor.publish('patients', function() {
        return Patients.find({userId: this.userId});
    });
});
