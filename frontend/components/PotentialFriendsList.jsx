import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactsListItem from './ContactsListItem';
import _ProfileItem from './_ProfileItem';


class PotentialFriendsList extends Component {
  constructor(props) {
    super(props)
  }  

  render() {
    const { potentialFriends, directoryButton } = this.props;

    let potentialFriendsJSX = potentialFriends.map(contact => {
      let { id, username } = contact;
      return (
        <li key={id}>
          <_ProfileItem 
            name={ username } 
            status={1} 
            src={'images/default-avatar.svg'} />       
        </li>
      );
    });

    return (
      <div className='potentials-view'>
        <ul className='potential-friends-list'>
          { potentialFriendsJSX }
        </ul>
      </div>
    );
  }
}

const mSTP = state => {
  return {
    potentialFriends: Object.values(state.potentialFriends),
    directoryButton: state.ui.directoryButton
  }
}

const mDTP = dispatch => {
  return { dispatch }
}

export default connect(mSTP, mDTP)(PotentialFriendsList);