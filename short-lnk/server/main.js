import { Meteor } from 'meteor/meteor';
import {WebApp}   from 'meteor/webapp';
import '../imports/api/links';
import '../imports/api/users';
import './../imports/startup/simple-schema-configuration';

Meteor.startup(() => {
    WebApp.connectHandlers.use((req, res, next) => {
        console.log('This is from my custom middleware');
        console.log(req.url, req.method, req.headers, req.query);
        // Set HTTP status code
        // res.statusCode = 404;
        // Set HTTP headers
        // res.setHeader('my-custom-header', 'Andrew was there');
        // Set HTTP body
        // res.write('<h1>This is my middleware</h1>');
        // End HTTP request
        // res.end();
        next();
    });
});
