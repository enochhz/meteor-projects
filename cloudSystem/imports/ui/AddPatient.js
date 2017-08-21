import React from 'react';
import {Patients} from './../api/patients';

export default class AddPatient extends React.Component {
    handleSubmit(event) {
        let patientName = event.target.patientName.value;
        let patientAge = event.target.patientAge.value;
        event.preventDefault();
        if (patientName && patientAge) {
            event.target.patientName.value = "";
            event.target.patientAge.value="",
                Patients.insert({
                    name: patientName,
                    age: patientAge,
                    visitTimes: this.props.times
                })
        } else {
            alert("Please fill out patient name and patient age");
        }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" name="patientName" placeholder="Patient name"/>
                <input type="text" name="patientAge" placeholder="Patient age"/>
                <button>Add Patient</button>
            </form>
        );
    }
}