import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as uuid from 'uuid/v1';

import ProfileItem from './ProfileItem';


class RecentsListItem extends Component {
  render() {
    const {roommates, switchRoomHandler } = this.props;

    // the name string to show room participants
    const nameArray = roommates.map(userObj => (userObj.username))
    const nameString = nameArray.join(' ');
    return (
      <li onClick={ switchRoomHandler }>
        <ProfileItem 
          key={uuid.default()}
          name={nameString} 
          status={'Online'}
          src={'images/myicon.jpeg'} 
          />
      </li>
    );
  }
}
  
const mSTP = state => {
  return {
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

