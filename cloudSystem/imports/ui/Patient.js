import React from 'react';
import {Patients} from "../api/patients";
import PropTypes from 'prop-types';

export default class Patient extends React.Component {
    render() {
       return (
           <tr key={this.props.patient._id}>
                <td>{this.props.patient.name}</td>
                <td>{this.props.patient.age}</td>
                <td>{this.props.patient.visitTimes}</td>
                <td><button onClick={() => Patients.update({_id: this.props.patient._id}, {$inc: {visitTimes: 1}})
                }>+1</button></td>
                <td><button onClick={() => Patients.update({_id: this.props.patient._id}, {$inc: {visitTimes: -1}})
                }>-1</button></td>
               <td><button onClick={() => Patients.remove(this.props.patient._id)}>X</button></td>
            </tr>
       );
    }
}

Patient.propTypes = {
    patient: PropTypes.object.isRequired
}