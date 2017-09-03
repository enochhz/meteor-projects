import React from 'react';
import {withRouter} from 'react-router-dom';

const SignOut= withRouter(({history}) => (
    <button onClick={() => {
        history.push('/')
    }}>SignOut</button>
))

export default class Links extends React.Component {
    render() {
        return (
            <div>
                <h1>Link here</h1>
                <SignOut/>
            </div>
        );
    }
}