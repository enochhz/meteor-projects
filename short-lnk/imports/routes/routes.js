import {Meteor} from 'meteor/meteor';
import React    from 'react';
import {Router, Route, Switch} from 'react-router';

import Login    from './../ui/Login';
import Signup   from './../ui/Signup';
import NotFound from './../ui/NotFound';
import Links    from '../ui/Link';

const browserHistory = require('history').createBrowserHistory();

const unauthenticatedPages = ['/', '/signup'];
const authenticatePages = ['/links'];

const onEnterPublicPage = () => {
    if (Meteor.userId()) {
        browserHistory.replace('/links');
    }
};

const onEnterPrivatePage = () => {
    if (!Meteor.userId()) {
        browserHistory.replace('/');
    }
};

export const onAuthChange = (isAuthenticated) => {
    console.log(isAuthenticated);
    const pathname = browserHistory.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatePages.includes(pathname);
    if (isUnauthenticatedPage && isAuthenticated) {
        browserHistory.replace('/links');
    } else if (isAuthenticatedPage && !isAuthenticated) {
        browserHistory.replace('/');
    }
    console.log('isAuthenticated', isAuthenticated);
};

export const routes = (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={Login}     onEnter={onEnterPublicPage}/>
            <Route path="/signup" component={Signup}    onEnter={onEnterPublicPage}/>
            <Route path="/links"  component={Links}     onEnter={onEnterPrivatePage}/>
            <Route path="*"       component={NotFound}/>
        </Switch>
    </Router>
);
