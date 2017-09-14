import React        from 'react';
import TitleBar     from "./TitleBar";
import AddPatient   from "./AddPatient";
import PatientList  from './PatientList';
import SideBar      from './SideBar';
import PropTypes    from 'prop-types';
import {Accounts}   from 'meteor/accounts-base';

export default class App extends React.Component {
    onLogout() {
        Accounts.logout();
    }
    render() {
       return (
           <div>
               <TitleBar title={"Cloud System"}/>
               <div>
                   <div className="sideBar">
                       <SideBar/>
                   </div>
                   <div className="wrapper wrapper_app">
                       <PatientList/>
                       <AddPatient times={0}/>
                       <button className="button" onClick={this.onLogout.bind(this)}>Logout</button>
                   </div>
               </div>
           </div>
       );
    }
};
