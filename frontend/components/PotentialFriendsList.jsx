import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactsListItem from './ContactsListItem';


class PotentialFriendsList extends Component {
  constructor(props) {
    super(props)
  }  

  render() {
    const { potentialFriends, directoryButton } = this.props;

    let potentialFriendsJSX = potentialFriends.map(contact => {
      return (
        <li>
          <ContactsListItem
            contact={ contact }/>
        </li>
      );
    });

    // if (potentialFriendsJSX.length === 0) {
    //   return <div className='loader'></div>
    // };


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