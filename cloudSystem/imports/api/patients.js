import {Mongo} from 'meteor/mongo';

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
