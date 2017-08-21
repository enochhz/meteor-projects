import React from 'react';
import Patient from './Patient';
import PropTypes from 'prop-types';

export default class PatientList extends React.Component {
    renderPatients(patientList) {
        return patientList.map(function (patient) {
            return <Patient key={patient._id} patient={patient}/>;
        });
    };
    render() {
        if (this.props.patients.length == 0) {
            return <h1>Add Your First Patients Here</h1>
        } else {
            return (
                <table>
                    <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Age</th>
                        <th>Visit Times</th>
                        <th>Add One</th>
                        <th>Minus One</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderPatients(this.props.patients)}
                    </tbody>
                </table>
            );
        }
    }
}

PatientList.propTypes = {
    patients: PropTypes.array.isRequired
}