import React from 'react';

export default class SideBar extends React.Component{
    render(){
        return (
            <div>
                <h3>菜单</h3>
                <a href="">前台</a>
                <a href="">医师</a>
                <a href="">病人</a>
                <a href="">库房</a>
            </div>
        );
    }
}
