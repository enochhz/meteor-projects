import {Mongo}      from 'meteor/mongo';
import {Meteor}      from 'meteor/meteor';

export const Patients = new Mongo.Collection('patients');

if (Meteor.isServer) {
    Meteor.publish('patients', () => {
       return Patients.find();
    });
}

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

