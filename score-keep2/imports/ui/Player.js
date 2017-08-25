import React from 'react';

import {Players} from './../api/player';

import PropTypes from 'prop-types';

export default class Player extends React.Component{
    render() {
        let itemClassName = `item item--position-${this.props.player.rank}`;

        return <div className={itemClassName} key={this.props.player._id}>
            <div className="player">
                <div>
                    <h3 className="player_name">{this.props.player.name}</h3>
                    <p className="player__status">
                        {this.props.player.rank} place - {this.props.player.position} {this.props.player.score} point(s).</p>
                </div>
                <div className="player__action">
                    <button className="button button--round" onClick={() => Players.update({_id: this.props.player._id}, {$inc: {score: -1}})}>-1</button>
                    {/*// short cuts */}
                    <button className="button button--round" onClick={() => Players.update(this.props.player._id, {$inc: {score: 1}})}>+1</button>
                    <button className="button button--round" onClick={() => Players.remove(this.props.player._id)}>X</button>
                </div>
            </div>
        </div>
    };
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
};