import React from 'react';
import TitleBar from "./TitleBar";
import AddPatient from "./AddPatient";
import PatientList from './PatientList';
import PropTypes from 'prop-types';

export default class App extends React.Component {
    render() {
       return (
           <div>
               <TitleBar title={this.props.title}/>
               <PatientList patients={this.props.patients}/>
               <AddPatient times={0}/>
           </div>
       );
    }
};

App.PropTypes = {
    title: PropTypes.string.isRequired,
    patients: PropTypes.array.isRequired
}