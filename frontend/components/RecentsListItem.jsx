import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as uuid from 'uuid/v1';

import ProfileItem from './ProfileItem';


class RecentsListItem extends Component {
  render() {
    const {roommates} = this.props;

    // the name string to show room participants
    const nameArray = roommates.map(userObj => (userObj.username))
    const nameString = nameArray.join(' ');
    return (
      <li>
        <ProfileItem 
          key={uuid.default()}
          name={nameString} 
          status={'Online'}
          src={'images/myicon.jpeg'} 
          handleClick={() => {console.log("HELLO")}} />    
      </li>
    );
  }
}
  
const mSTP = state => {
  return {
    recents: Object.values({
      1: {id: 1, name: 'Alice', msg: "Nothing is impossible to a willing hear"},
      2: {id: 2, name: 'busuu', msg: "3 participants"},
      3: {id: 3, name: 'San Sae', msg: "Away"},
      4: {id: 4, name: 'Bruce Wong', msg: "Cupertino, US"}
    })
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

