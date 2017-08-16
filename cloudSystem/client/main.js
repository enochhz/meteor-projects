import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import React from 'react';
import ReactDom from 'react-dom';

import {Patients} from "../imports/api/patients";

const renderPatients = function(patientList) {
    return patientList.map( function(patient) {
        return (
            <tr key={patient._id}>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.visitTimes}</td>
                <td><button onClick={() => Patients.update({_id: patient._id}, {$inc: {visitTimes: 1}})
                }>+1</button></td>
                <td><button onClick={function(){
                    Patients.remove({_id: patient._id})
                }}>X</button></td>
            </tr>
        );
    });
};

const handleSubmit  = function(event){
    let patientName = event.target.patientName.value;
    let patientAge = event.target.patientAge.value;
    event.preventDefault();
    if (patientName && patientAge) {
        event.target.patientName.value = "";
        event.target.patientAge.value="",
        Patients.insert({
            name: patientName,
            age: patientAge,
            visitTimes: 0
        })
    } else {
        alert("Please fill out patient name and patient age");
    }
};

Meteor.startup(function() {
    Tracker.autorun (function() {
        let title = 'Cloud System';
        let patients = Patients.find().fetch();
        let jsx = (
            <div>
                <h1>{title}</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Patient Name</th>
                            <th>Age</th>
                            <th>Visit Times</th>
                            <th>Add One</th>
                            <th></th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderPatients(patients)}
                    </tbody>
                </table>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="patientName" placeholder="Patient name"/>
                    <input type="text" name="patientAge" placeholder="Patient age"/>
                    <button>Add Patient</button>
                </form>
            </div>
        );
        ReactDom.render(jsx, document.getElementById('app'));
    });
});
