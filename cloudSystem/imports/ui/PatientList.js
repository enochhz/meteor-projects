import React        from 'react';
import Patient      from './Patient';
import PropTypes    from 'prop-types';
import FlipMove     from 'react-flip-move';
import {Tracker}    from 'meteor/tracker';
import {Patients}    from './../api/patients';

export default class PatientList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patients: []
        };
    }
    componentDidMount() {
       console.log('didMount');
       this.patientsTracker = Tracker.autorun(() => {
           Meteor.subscribe('patients');
           const patients = Patients.find().fetch();
           this.setState({patients});
       });
    }
    componentWillUnmount() {
        console.log('willUnmout');
        this.patientsTracker.stop();
    }

    renderPatients() {
        return this.state.patients.map(function (patient) {
            return <Patient key={patient._id} patient={patient}/>;
        });
    };
    render() {
        if (this.state.patients == 0) {
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
                        {this.renderPatients()}
                    </FlipMove>
                </table>
                </div>
            );
        }
    }
}
