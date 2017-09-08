import React        from 'react';
import {Link}       from 'react-router-dom';
import {Accounts}   from 'meteor/accounts-base';

export default class Signup extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           error: ''
       };
    }
    onSubmit(e) {
        e.preventDefault();
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();
        Accounts.createUser({email, password}, (err) => {
            console.log('Signup callback', err);
        });
    }
    render() {
        return (
            <div>
                <h1>Signup Page</h1>
                {this.state.error ? <p>{this.state.error}</p> : undefined}
                <form onSubmit={this.onSubmit.bind(this)}>
                   <input type="email" ref="email" placeholder="Email"/>
                    <input type="password" ref="password" placeholder="Password"/>
                    <button>Submit</button>
                </form>
                <Link to={'/'}>I already have a accout</Link>
            </div>
        )
    }
}