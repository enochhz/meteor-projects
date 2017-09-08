import {Meteor} from 'meteor/meteor';
import {Tracker}from 'meteor/tracker';
import {Router, Route, Switch} from 'react-router';

import React    from 'react';
import ReactDom from 'react-dom';

import {Patients, calculatePaitentPositions} from '../api/patients';
import Login    from './../ui/Login';
import Signup   from './../ui/Signup';
import App      from './../ui/App';
import NotFound from './../ui/NotFound';

const browserHistory = require('history').createBrowserHistory();

const unauthenticatedPages =  ['/', '/signup'];
const authenticatedPages = ['/app'];

const onEnterPublicPage = () => {
    if (Meteor.userID()) {
        browserHistory.replace('/links');
    }
};

const onEnterPrivatePage = () => {
    if (!Meteor.userId()) {
        browserHistory.replace('/');
    }
};

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

export const routes = (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/"  component={Login}    onEnter={onEnterPublicPage}/>
            <Route path="/signup"  component={Signup}   onEnter={onEnterPublicPage}/>
            <Route path="/app"     component={App1}     onEnter={onEnterPrivatePage}/>
            <Route path="*"        component={NotFound}/>
        </Switch>
    </Router>
);

export const onAuthChange = (isAuthenticated) => {
    const pathname = browserHistory.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);
    if (isUnauthenticatedPage && isAuthenticated) {
        browserHistory.replace('/app');
    } else if (isAuthenticatedPage && !isAuthenticated) {
        browserHistory.replace('/');
    }
    console.log('isAuthenticated ', isAuthenticated);
};

// Meteor.startup(function() {
//     Tracker.autorun (function() {
//         let title = 'Cloud System';
//         let patients = Patients.find({}, {sort: {visitTimes: -1}}).fetch();
//         let positionedPatients = calculatePaitentPositions(patients);
//         {/*<App title={title} patients={positionedPatients}/>*/}
//         ReactDom.render(routes, document.getElementById('app'));
//     });
// });
