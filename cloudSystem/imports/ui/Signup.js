import React        from 'react';
import {Link}       from 'react-router-dom';
import {Accounts}   from 'meteor/accounts-base';
import TitleBar     from './TitleBar';

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
        if (password.length < 9) {
            return this.setState({error: 'Password must be more than 8 characters long'});
        }
        Accounts.createUser({email, password}, (err) => {
            console.log('Signup callback', err);
            if (err) {
                this.setState({error: err.reason});
            } else {
                this.setState({error: ''});
            }
        });
    }
    render() {
        return (
            <div>
                <TitleBar title="SIGNUP PAGE"/>
                <div className="wrapper">
                    {this.state.error ? <p className="item__message">{this.state.error}</p> : undefined}
                    <div className="item">
                        <form className="form" onSubmit={this.onSubmit.bind(this)}>
                           <input className="form__input" type="email" ref="email" placeholder="Email"/>
                            <input className="form__input" type="password" ref="password" placeholder="Password"/>
                            <button className="button">Submit</button>
                        </form>
                    </div>
                    <Link to={'/'}>I already have a accout</Link>
                </div>
            </div>
        )
    }
}