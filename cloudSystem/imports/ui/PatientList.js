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
            return (
                <div className="item">
                    <p className="item__message">Add Your First Patient Here</p>
                </div>
            );
        } else {
            return (
                <div className="item">
                <table>
                    <thead>
                        <tr>
                            <th className="item">Name</th>
                            <th className="item">Age</th>
                            <th className="item">Visite Time</th>
                            <th className="item">Add</th>
                            <th className="item">Minus</th>
                            <th className="item">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderPatients(this.props.patients)}
                    </tbody>
                </table>
                </div>
            );
        }
    }
}

PatientList.propTypes = {
    patients: PropTypes.array.isRequired
}