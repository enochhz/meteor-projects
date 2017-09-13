import React        from 'react';
import {Meteor}     from 'meteor/meteor';

export default class AddPatient extends React.Component {
    handleSubmit(event) {
        let patientName = event.target.patientName.value;
        let patientAge = event.target.patientAge.value;
        event.preventDefault();
        if (patientName && patientAge) {
            Meteor.call('patients.insert', patientName, patientAge);
            // set both patient and age input fields to empty
            event.target.patientName.value = "";
            event.target.patientAge.value="";
        } else {
            alert("Please fill out both patient name and patient age");
        }
    }
    render() {
        return (
            <div className="item">
                <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                    <input className="form__input" type="text" name="patientName" placeholder="Patient name"/>
                    <input className="form__input" type="text" name="patientAge" placeholder="Patient age"/>
                    <button className="button">Add Patient</button>
                </form>
            </div>
        );
    }
}