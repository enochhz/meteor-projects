import {Meteor} from 'meteor/meteor';
import {Router, Route, Switch} from 'react-router';

import React    from 'react';

import {Patients, calculatePaitentPositions} from './../api/patients';
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

export const routes = (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/"   component={Login}   onEnter={onEnterPublicPage}/>
            <Route path="/signup"   component={Signup}  onEnter={onEnterPublicPage}/>
            <Route path="/app"      component={App}    onEnter={onEnterPrivatePage}/>
            <Route path="*"         component={NotFound}/>
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
