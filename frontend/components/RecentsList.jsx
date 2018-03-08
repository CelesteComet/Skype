import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecentsInfo } from './Selectors';
import { moveToRoom } from '../actions/uiActions';
import { fetchRoomMessages } from '../actions/messageActions';

import RecentsListItem from './RecentsListItem';

class RecentsList extends Component {
  constructor(props) {
    super(props);
    this.handleSwitchRoom = this.handleSwitchRoom.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
  }

  handleSwitchRoom(roomId, e) {
    const { dispatch } = this.props;
    e.preventDefault();

    // Go to the room 

    dispatch(moveToRoom(Number(roomId)));
    dispatch(fetchRoomMessages(roomId)).then(() => {
      this.scrollDown();
    });
  }

  scrollDown() {
     $(".main-message-interface")[0].scrollTop = $(".main-message-interface")[0].scrollHeight;
  }

  render() {
    const {recentRoomsArray, recentRoomsObject} = this.props;

    let recentsJSX = [];
    for (let id in recentRoomsObject) {
      recentsJSX.push(
        <RecentsListItem 
          key={id} 
          roomId={id} 
          roommates={Object.values(recentRoomsObject[id])}
          switchRoomHandler={this.handleSwitchRoom.bind(null, id)}
          />
      );
    }
    // const recentsJSX = recentRoomsArray.map((recentRoom, index) => {
    //   return (
    //     <RecentsListItem 
    //       key={index}
    //       roommates={recentRoom}
    //       switchRoomHandler={this.handleSwitchRoom.bind(null, recentRoom)}
    //     />
    //   );
    // });

    return (
      <ul className="recents-list">
        { recentsJSX }
      </ul>
    )
  }
}
  
const mSTP = state => {
  return {
    recentRoomsArray: Object.values(getRecentsInfo(state)),
    recentRoomsObject: getRecentsInfo(state)
  };
};

const mDTP = dispatch => {
  return {
    dispatch
  };
};

RecentsList.propTypes = {
  recents: PropTypes.array
}

export default connect(mSTP, mDTP)(RecentsList);

