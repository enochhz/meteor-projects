import {Mongo}      from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import {Accounts}   from 'meteor/accounts-base';

Accounts.validateNewUser((user) =>{
    const email = user.email[0].address;

    try {
        new SimpleSchema({
            email: {
                type: String,
                regEx: SimpleSchema.RegEx.email
            }
        }).validate({email});
    } catch (e) {
        throw new Meteor.Error(400, e.message);
    }

    console.log('this is the user', user);
    return true;
});

export const Patients = new Mongo.Collection('patients');

export const calculatePaitentPositions = (patients) => {
    let rank = 1;

    return patients.map((patient, index) => {
        if (index != 0 && patients[index - 1].visitTimes > patient.visitTimes) {
           // rank++;
        }
        rank = index;
        return {
            ...patient,
            rank
        };
    });
};

