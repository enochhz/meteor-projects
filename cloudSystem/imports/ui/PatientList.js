import React from 'react';
import Patient from './Patient';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

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
                    <FlipMove maintainContainerHeight={true}>
                        <tr>
                            <td className="item item__head">Name</td>
                            <td className="item item__head">Age</td>
                            <td className="item item__head">Visite Time</td>
                            <td className="item item__head">Add</td>
                            <td className="item item__head">Minus</td>
                            <td className="item item__head">Delete</td>
                        </tr>
                        {this.renderPatients(this.props.patients)}
                    </FlipMove>
                </table>
                </div>
            );
        }
    }
}

PatientList.propTypes = {
    patients: PropTypes.array.isRequired
}