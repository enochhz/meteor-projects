import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';

Meteor.startup(function(){
    let name = 'Walker';
    // title -> Account Settings
    let title = 'Socre Keep';
    let jsx = (
        <div>
            <h1>{title}</h1>
            <p>Hello {name}</p>
            <p>Second p.</p>
        </div>
    );
    ReactDom.render(jsx, document.getElementById('app'));
});
