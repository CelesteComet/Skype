import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecentsInfo } from './Selectors';

import RecentsListItem from './RecentsListItem';

class RecentsList extends Component {
  render() {
    const {recentRooms} = this.props;
    console.log(recentRooms, "RECENT ROOM")
    
    const recentsJSX = recentRooms.map((recentRoom, index) => {
      return (
        <RecentsListItem 
          key={index}
          roommates={recentRoom}
        />
      );
    });

    return (
      <ul className="recents-list">
        { recentsJSX }
      </ul>
    )
  }
}
  
const mSTP = state => {
  return {
    recentRooms: Object.values(getRecentsInfo(state))
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

