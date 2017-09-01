import {Meteor} from 'meteor/meteor';
import React    from 'react';
import ReactDom from 'react-dom';

import {Router, Route, Switch} from 'react-router';

import Login    from './../imports/ui/Login';
import Signup   from './../imports/ui/Signup';
import Link     from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';

const browserHistory = require('history').createBrowserHistory();

// Create and Import basic version of Login
// Create the route for "/" and render Login

const routes = (
    <Router history={browserHistory}>
        <Switch>
            <Route path="/" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/links" component={Link}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </Router>
);

Meteor.startup(() => {
    ReactDom.render(routes, document.getElementById('app'));
});