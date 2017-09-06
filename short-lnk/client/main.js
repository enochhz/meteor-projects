import {Meteor} from 'meteor/meteor';
import React    from 'react';
import ReactDom from 'react-dom';

import {Router, Route, Switch} from 'react-router';
import {Tracker}from 'meteor/tracker';
import createHisotry from 'history/createBrowserHistory';

import Login    from './../imports/ui/Login';
import Signup   from './../imports/ui/Signup';
import NotFound from './../imports/ui/NotFound';
import Links    from './../imports/ui/Links';

const browserHistory = require('history').createBrowserHistory();
const history = createHisotry();

// Create and Import basic version of Login
// Create the route for "/" and render Login

const unauthenticatedPages = ['/', '/signup'];
const authenticatePages = ['/links'];

const routes = (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/links" component={Links}/>
            <Route path="*" component={NotFound}/>
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
      console.log('here');
      browserHistory.push('/links');
  } else if (isAuthenticatedPage && !isAuthenticated) {
      console.log('there');
      browserHistory.push('/');
  }
  console.log('isAuthenticated', isAuthenticated);
});

Meteor.startup(() => {
    ReactDom.render(routes, document.getElementById('app'));
});