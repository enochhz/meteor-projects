import React    from 'react';
import {Link}   from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import TitleBar from './TitleBar';

export default class Login extends React.Component {
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
        Meteor.loginWithPassword({email}, password, (err) => {
            console.log('Login callback = ', err);
            if (err) {
                this.setState({error: 'Unable to login. Check email and password.'});
            } else {
                this.setState({error: ''});
            }
        });
    }
    render() {
        return (
            <div>
                <TitleBar title="LOGIN PAGE"/>
                <div className="wrapper">
                    {this.state.error ? <p className="item__message">{this.state.error}</p> : undefined}
                    <div className="item">
                        <form className="form" onSubmit={this.onSubmit.bind(this)}>
                            <input className="form__input" type="email" ref="email" name="email" placeholder="Email"/>
                            <input className="form__input" type="password" ref="password" name="password" placeholder="Password"/>
                            <button className="button">Login</button>
                        </form>
                    </div>
                <Link to={'/signup'}>I want to sign up</Link>
                </div>
            </div>
        )
    }
}