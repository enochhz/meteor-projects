import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import React from 'react';
import ReactDom from 'react-dom';

import {Patients} from '../imports/api/patients';
import App from './../imports/ui/App';

Meteor.startup(function() {
    Tracker.autorun (function() {
        let title = 'Cloud System';
        let patients = Patients.find().fetch();
        ReactDom.render(<App title={title} patients={patients}/>, document.getElementById('app'));
    });
});
