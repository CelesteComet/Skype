import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecentsInfo, getUserStatusMsg } from './Selectors';
import { moveToRoom } from '../actions/uiActions';
import { fetchRoomMessages } from '../actions/messageActions';
import { fetchRooms } from '../actions/roomActions';

import _ProfileItem from './_ProfileItem';
import RecentsListItem from './RecentsListItem';

class RecentsList extends Component {
  constructor(props) {
    super(props);
    this.switchRoom = this.switchRoom.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
  }

  switchRoom(roomId) {
    const { switchRoom } = this.props;
    switchRoom(roomId);
    fetchRoomMessages(roomId);
  }

  componentDidMount() {
    const { fetchRooms } = this.props;
    fetchRooms();
  } 

  scrollDown() {
    // $(".main-message-interface")[0].scrollTop = $(".main-message-interface")[0].scrollHeight;
  }

  render() {
    const { rooms, currentUser } = this.props;

    let recentsJSX = [];

    for (let id in rooms) {

      // get the room
      let roomItem = rooms[id];

      // remove currentUser's name out of the room names
      delete roomItem.users[currentUser.id];

      // get the status message for name
      let usersString = getUserStatusMsg(roomItem.users);
      
      // get the last message sent if there is one
      let lastMsgSent;
      if (roomItem.lastMsgSent) {
        lastMsgSent = roomItem.lastMsgSent.body;
      }

      // get the number of users of the room 
      let numberOfUsers = Object.keys(roomItem.users).length;

      // render different roomItem components based on number of users in room
      if (numberOfUsers == 1) {
        recentsJSX.push(
          <li>
            <_ProfileItem 
            name={ usersString } 
            subtitle={ lastMsgSent } 
            status={1} 
            src={'images/default-avatar.svg'} 
            onClick={ this.switchRoom.bind(null, id) } />
          </li>
        );
      } else {
        recentsJSX.push(
          <li>
            <_ProfileItem 
            name={ usersString } 
            subtitle={ `${parseInt(numberOfUsers)} participants` } 
            src={'images/default-avatar-group.svg'}
            onClick={ this.switchRoom } />
          </li>
        );
      };
    }

    return (
      <ul className="recents-list">
        { recentsJSX }
      </ul>
    )
  }
}
  
const mapStateToProps = state => {
  return {
    rooms: state.rooms,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRooms: () => { return dispatch(fetchRooms()) },
    fetchRoomMessages: roomId => { return dispatch(fetchRoomMessages(roomId)) },
    switchRoom: roomId => { return dispatch(moveToRoom(Number(roomId))) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentsList);

