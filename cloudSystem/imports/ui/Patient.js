import React from 'react';
import {Patients} from "../api/patients";
import PropTypes from 'prop-types';

export default class Patient extends React.Component {
    render() {
        let itemClassName = `item item--position-${this.props.patient.rank}`;
        let buttonClassName= `button button__round button--position-${this.props.patient.rank}`;
       return (
               <tr key={this.props.patient._id}>
                    <td className={itemClassName}>{this.props.patient.name}</td>
                    <td className={itemClassName}>{this.props.patient.age}</td>
                    <td className={itemClassName}>{this.props.patient.visitTimes}</td>
                    <td className={itemClassName}><button className={buttonClassName} onClick={() => Patients.update({_id: this.props.patient._id}, {$inc: {visitTimes: 1}})
                    }>+1</button></td>
                    <td className={itemClassName}><button className={buttonClassName} onClick={() => Patients.update({_id: this.props.patient._id}, {$inc: {visitTimes: -1}})
                    }>-1</button></td>
                   <td className={itemClassName}><button className={buttonClassName} onClick={() => {
                       Patients.remove(this.props.patient._id)
                   }}>X</button></td>
                </tr>
       );
    }
}

Patient.propTypes = {
    patient: PropTypes.object.isRequired
}