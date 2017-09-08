import React        from 'react';
import TitleBar     from "./TitleBar";
import AddPatient   from "./AddPatient";
import PatientList  from './PatientList';
import PropTypes    from 'prop-types';
import {Accounts}   from 'meteor/accounts-base';

export default class App extends React.Component {
    onLogout() {
        Accounts.logout();
    }
    render() {
       return (
           <div>
               <TitleBar title={this.props.title}/>
               <div className="wrapper">
                   <PatientList patients={this.props.patients}/>
                   <AddPatient times={0}/>
               </div>
               <button onClick={this.onLogout.bind(this)}>Logout</button>
           </div>
       );
    }
};

App.PropTypes = {
    title: PropTypes.string.isRequired,
    patients: PropTypes.array.isRequired
}