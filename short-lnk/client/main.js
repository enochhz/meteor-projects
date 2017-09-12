import {Meteor} from 'meteor/meteor';
import ReactDom from 'react-dom';
import {Tracker}from 'meteor/tracker';

import {routes, onAuthChange} from '../imports/routes/routes';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
    Meteor.call('addNumbers', 11, 13, (err, res) => {
        console.log('Greet User Arguments', err, res);
    });
    ReactDom.render(routes, document.getElementById('app'));
});