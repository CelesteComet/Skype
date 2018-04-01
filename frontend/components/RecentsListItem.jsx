import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Misc.
import * as uuid from 'uuid/v1';

// Import Components
import ProfileItem from './ProfileItem';
import ContactsListItem from './ContactsListItem';

class RecentsListItem extends Component {

  constructor(props) {
    super(props);
    this.switchRoomHandler = this.switchRoomHandler.bind(this);
  }

  switchRoomHandler() {
    console.log("ROOM SWITCH");
  }

  render() {

    // difference between currentRoomId and room_id is that room_id is the selection and 
    // currentRoomId is where you are currently at
    const { roommates, switchRoomHandler, currentRoomId, roomId } = this.props;

    // the name string to show room participants
    const nameArray = roommates.map(userObj => (userObj.username))

    // if there are more than one member, use a different default icon
    let imageSource = false;
    let statusIcon = true;
    let status;
    if (nameArray.length > 1) {
      imageSource = `images/default-avatar-group.svg`
      status = `${nameArray.length} participants`
      statusIcon = false
    } else {
      imageSource = `images/default-avatar.svg`;
      status = this.props.roommates[0].status;
    }


    const nameString = nameArray.join(' ');
    return (
      <li className={currentRoomId === Number(roomId) ? 'active' : ''} onClick={ switchRoomHandler }>
        <ProfileItem 
          key={uuid.default()}
          name={nameString} 
          status={status}
          src={imageSource}
          canHover={ false }
          statusIcon={statusIcon}
          />
      </li>
    );
  }
}
  
const mSTP = state => {
  return {
    currentRoomId: state.ui.currentRoomId
  };
};



const mDTP = dispatch => {
  return {

  };
};

RecentsListItem.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  src: PropTypes.string
}

export default connect(mSTP, mDTP)(RecentsListItem);

