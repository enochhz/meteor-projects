import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import React from 'react';
import ReactDom from 'react-dom';

import {Patients, calculatePaitentPositions} from '../imports/api/patients';
import App from './../imports/ui/App';

Meteor.startup(function() {
    Tracker.autorun (function() {
        let title = 'Cloud System';
        let patients = Patients.find({}, {sort: {visitTimes: -1}}).fetch();
        let positionedPatients = calculatePaitentPositions(patients);
        ReactDom.render(<App title={title} patients={positionedPatients}/>, document.getElementById('app'));
    });
});
