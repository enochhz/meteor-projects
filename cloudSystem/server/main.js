import { Meteor }   from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import '../imports/api/validate';
import './../imports/startup/simple-schema-configuration';
// import '../imports/api/patients';

export const Patients = new Mongo.Collection('patients');

Meteor.startup(() => {
    Meteor.publish('patients', function() {
        return Patients.find({userId: this.userId});
    });
});

Meteor.methods({
    'patients.insert'(name, age) {
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        new SimpleSchema({
            name: {
                type: String,
                label: 'Patient Name',
                min: 0,
                max: 7
            },
            age: {
                type: String,
                label: 'Patient age',
                min: 0,
                max: 2
            }
        }).validate({name, age});

        Patients.insert({
            name: name,
            age: age,
            visitTimes: 0,
            userId: this.userId
        });
    }
});

