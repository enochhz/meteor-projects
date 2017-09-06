import React from 'react';
import {withRouter} from 'react-router-dom';
import {Accounts} from 'meteor/accounts-base';

const SignOut= withRouter(({history}) => (
    <button onClick={() => {
            history.push('/')
    }}>SignOut</button>
))

export default class Links extends React.Component {
    onLogout() {
        Accounts.logout();
    }
    render() {
        return (
            <div>
                <h1>Link here</h1>
                <button onClick={this.onLogout.bind(this)}>Logout</button>
            </div>
        );
    }
}