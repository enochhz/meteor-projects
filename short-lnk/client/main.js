import {Meteor} from 'meteor/meteor';
import React    from 'react';
import ReactDom from 'react-dom';

import {Router, Route, Switch} from 'react-router';
import {Tracker}from 'meteor/tracker';

import Login    from './../imports/ui/Login';
import Signup   from './../imports/ui/Signup';
import NotFound from './../imports/ui/NotFound';
import Links    from './../imports/ui/Links';

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

const routes = (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={Login}     onEnter={onEnterPublicPage}/>
            <Route path="/signup" component={Signup}    onEnter={onEnterPublicPage}/>
            <Route path="/links"  component={Links}     onEnter={onEnterPrivatePage}/>
            <Route path="*"       component={NotFound}/>
        </Switch>
    </Router>
);

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
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
});

Meteor.startup(() => {
    ReactDom.render(routes, document.getElementById('app'));
});