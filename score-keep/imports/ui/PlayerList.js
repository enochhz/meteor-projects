import React from 'react';
import Player from './Player';
import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component {
    renderPlayer() {
        if (this.props.players.length === 0) {
            return (
                <div className="item">
                    <p className="item_message item_message--empty">Add your first player to get started</p>
                </div>
            );
        } else {
            return this.props.players.map((player) => {
                return <Player key={player._id} player={player}/>;
            });
        }
    }
    render() {
       return (
          <div>
              <FlipMove duration={750} easing="ease-out" maintainContainerHeight={true}>
                  {this.renderPlayer()}
              </FlipMove>
          </div>
        );
    }
};

PlayerList.propTypes = {
    players: React.PropTypes.array.isRequired
}