import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { connect }          from 'react-redux';
import { 
  getRecentsInfo, 
  getUserStatusMsg, 
  orderByDate }             from './Selectors';

// Import Actions
import { moveToRoom }         from '../actions/uiActions';
import { fetchRoomMessages }  from '../actions/messageActions';
import { fetchRooms }         from '../actions/roomActions';
import { leaveRoom }          from '../actions/roomMembershipActions'

// Import Misc.
import { convertStringToSmileyArray } from '../middleware';

// Import Components
import _ProfileItem     from './_ProfileItem';
import RecentsListItem  from './RecentsListItem';

class RecentsList extends Component {
  constructor(props) {
    super(props);
    this.moveToRoom = this.moveToRoom.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
  }

  moveToRoom(roomId) {
    const { moveToRoom, fetchRoomMessages } = this.props;
    moveToRoom(roomId);
    fetchRoomMessages(roomId);
  }

  componentDidMount() {
    // For the contextMenu so that it can hide after it has been shown 
    let contextMenu = document.querySelector(".context-menu");
    document.body.addEventListener('click', () => {
      contextMenu.className = "context-menu hide";
    })
  } 

  scrollDown() {
    // $(".main-message-interface")[0].scrollTop = $(".main-message-interface")[0].scrollHeight;
  }

  handleContextMenu(roomId, e) {
    e.preventDefault();

    const { leaveRoom } = this.props;

    // find the hidden context menu
    let contextMenu = document.querySelector(".context-menu");

    // provide original className to make it show
    contextMenu.className = "context-menu";

    // set new positions based on mouse click
    contextMenu.style.top = (e.pageY - contextMenu.offsetHeight) + 'px';
    contextMenu.style.left = (e.pageX - contextMenu.offsetWidth/2) + 'px';

    // set event listener for delete action
    let contextMenuDeleteItem = contextMenu.querySelector('li');

    // handler to leave the room
    let leaveRoomHandler = function(e) {
      leaveRoom(roomId);
      contextMenuDeleteItem.removeEventListener('click', leaveRoomHandler);
    }

    contextMenuDeleteItem.addEventListener('click', leaveRoomHandler);
  }

  render() {
    const { rooms, currentUser, currentRoomId } = this.props;

    let recentsJSX = [];

    for (let i = 0; i < rooms.length; i++ ) {

      // get the room
      let roomItem = rooms[i];

      // remove currentUser's name out of the room names
      delete roomItem.users[currentUser.id];

      // get the status message for name
      let usersString = getUserStatusMsg(roomItem.users);
      
      // get the last message sent if there is one
      let lastMsgSent;
      if (roomItem.lastMsgSent) {
        lastMsgSent = roomItem.lastMsgSent.body;
      }

      // if it is the current room, give class of selected
      let className = "";
      if (roomItem.id == currentRoomId) {
        className = 'selected';
      }

      // get the number of users of the room 
      let numberOfUsers = Object.keys(roomItem.users).length;

      // render different roomItem components based on number of users in room
      if (numberOfUsers == 1) {

        // get the single user information
        let user = Object.values(roomItem.users)[0];
        recentsJSX.push(
          <li key={roomItem.id} 
              className={ className } 
              onClick={ this.moveToRoom.bind(null, roomItem.id) }
              onContextMenu={this.handleContextMenu.bind(null, roomItem.id)}>
            <_ProfileItem 
              name={ usersString } 
              subtitle={ lastMsgSent ? convertStringToSmileyArray(lastMsgSent) : "" } 
              status={ user.status } 
              src={'images/default-avatar.svg'} />
          </li>
        );
      } else {
        recentsJSX.push(
          <li key={roomItem.id} 
              className={ className } 
              onClick={ this.moveToRoom.bind(null, roomItem.id) }
              onContextMenu={this.handleContextMenu.bind(null, roomItem.id)}>
            <_ProfileItem 
              name={ usersString } 
              subtitle={ `${parseInt(numberOfUsers)} participants` } 
              src={'images/default-avatar-group.svg'} />
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
    rooms: orderByDate(state.rooms),
    currentUser: state.session.currentUser,
    currentRoomId: state.ui.currentRoomId
  };
}

const mapDispatchToProps = dispatch => {
  return {
    moveToRoom: roomId => { dispatch(moveToRoom(roomId)) },
    fetchRoomMessages: roomId => { dispatch(fetchRoomMessages(roomId)) },
    leaveRoom: roomId => { dispatch(leaveRoom(roomId)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentsList);

