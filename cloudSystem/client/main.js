import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Router, Route, Switch} from 'react-router';

import React from 'react';
import ReactDom from 'react-dom';

import {Patients, calculatePaitentPositions} from '../imports/api/patients';
import Login from './../imports/ui/Login';
import Signup from './../imports/ui/Signup';
import App from './../imports/ui/App';
import NotFound from './../imports/ui/NotFound';

const browserHistory = require('history').createBrowserHistory();

const unauthenticatedPages =  ['/', '/signup'];
const authenticatedPages = ['/app'];

let title = 'Cloud System';
let patients = Patients.find({}, {sort: {visitTimes: -1}}).fetch();
let positionedPatients = calculatePaitentPositions(patients);
class App1 extends React.Component{
    render() {
        return (
            <div>

                <App title={title} patients={positionedPatients}/>
            </div>
        );
    }
}

const routes = (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/"        component={Login}/>
            <Route path="/signup"  component={Signup}/>
            <Route path="/app"        component={App1}/>
            <Route path="*"        component={NotFound}/>
        </Switch>
    </Router>
);

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    const pathname = browserHistory.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);
    if (isUnauthenticatedPage && isAuthenticated) {
        browserHistory.push('/app');
    } else if (isAuthenticatedPage && !isAuthenticated) {
        browserHistory.push('/');
    }
    console.log('isAuthenticated ', isAuthenticated);
})

Meteor.startup(function() {
    Tracker.autorun (function() {
        let title = 'Cloud System';
        let patients = Patients.find({}, {sort: {visitTimes: -1}}).fetch();
        let positionedPatients = calculatePaitentPositions(patients);
        {/*<App title={title} patients={positionedPatients}/>*/}
        ReactDom.render(routes, document.getElementById('app'));
    });
});
