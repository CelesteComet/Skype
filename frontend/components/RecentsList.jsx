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
    this.handleSwitchRoom = this.handleSwitchRoom.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
  }

  componentDidMount() {
    fetchRooms();
  }

  handleSwitchRoom(roomId, e) {
    e.preventDefault();
    const { dispatch, switchRoom } = this.props;
    // Go to the room 
    switchRoom(roomId);
    dispatch(fetchRoomMessages(roomId)).then(() => {
      this.scrollDown();
    });
  }     

  scrollDown() {
    // $(".main-message-interface")[0].scrollTop = $(".main-message-interface")[0].scrollHeight;
  }

  render() {
    const { rooms, currentUser } = this.props;
    console.log(rooms);

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
      console.log(numberOfUsers);
      if (numberOfUsers == 1) {
        recentsJSX.push(
          <li>
            <_ProfileItem 
            name={ usersString } 
            subtitle={ lastMsgSent } 
            status={1} 
            src={'images/default-avatar.svg'} 
            onClick={ this.switchRoom } />
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
    fetchRooms: dispatch(fetchRooms()),
    switchRoom: roomId => { dispatch(moveToRoom(Number(roomId))) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentsList);

