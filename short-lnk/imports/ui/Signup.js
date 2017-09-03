import React from 'react';
import {Link} from 'react-router-dom';

export default class Signup extends React.Component {
    render() {
       return (
           <div>
              <h1>Join Us</h1>
              <Link to='/'>Already Have an account? </Link>
           </div>
       );
    }
}
