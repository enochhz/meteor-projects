import React from 'react';
import {Link} from 'react-router-dom';
import {Accounts} from 'meteor/accounts-base';


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
            console.log('Singup callback', err);
        });
        // this.setState({
        //     error: 'Something went wrong.'
        // });
    }
    render() {
       return (
           <div>
              <h1>Join Us</h1>
               {this.state.error ? <p>{this.state.error}</p> : undefined}
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="email" ref="email" name="email" placeholder="Email"/>
                    <input type="password" ref="password" name="password" placeholder="Password"/>
                    <button>Sumbmit</button>
                </form>
              <Link to='/'>Already Have an account? </Link>
           </div>
       );
    }
}
