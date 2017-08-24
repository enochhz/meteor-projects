import React from 'react';
import {Patients} from "../api/patients";
import PropTypes from 'prop-types';

export default class Patient extends React.Component {
    render() {
       return (
               <tr key={this.props.patient._id}>
                    <td className="item">{this.props.patient.name}</td>
                    <td className="item">{this.props.patient.age}</td>
                    <td className="item">{this.props.patient.visitTimes}</td>
                    <td className="item"><button className="button button__round" onClick={() => Patients.update({_id: this.props.patient._id}, {$inc: {visitTimes: 1}})
                    }>+1</button></td>
                    <td className="item"><button className="button button__round" onClick={() => Patients.update({_id: this.props.patient._id}, {$inc: {visitTimes: -1}})
                    }>-1</button></td>
                   <td className="item"><button className="button button__round" onClick={() => Patients.remove(this.props.patient._id)}>X</button></td>
                </tr>
       );
    }
}

Patient.propTypes = {
    patient: PropTypes.object.isRequired
}