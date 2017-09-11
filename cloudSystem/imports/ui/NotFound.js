import React    from 'react';
import {Link}   from 'react-router-dom';
import TitleBar from './TitleBar';

export default class NotFound extends React.Component {
    render() {
        return (
            <TitleBar title="404 Page Not Found"/>
        )
    }
}