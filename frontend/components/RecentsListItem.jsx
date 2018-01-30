import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProfileItem from './ProfileItem';

const profileItemStyles = {

};

class RecentsListItem extends Component {
  render() {
    const {name, msg} = this.props;
    return (
      <li>
        <ProfileItem 
          name={'Bruce Wong'} 
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

