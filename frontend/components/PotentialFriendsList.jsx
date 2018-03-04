import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactsListItem from './ContactsListItem';


class PotentialFriendsList extends Component {
  constructor(props) {
    super(props)
  }  

  render() {
    const { potentialFriends } = this.props;

    if (potentialFriends.length == 0) {
      return <p>No friends found</p>
    }


    let potentialFriendsJSX = potentialFriends.map(contact => {
      return (
        <li>
          <ContactsListItem
            contact={ contact }/>
        </li>
      );
    });

    if (potentialFriendsJSX.length === 0) {
      return <div className='loader'></div>
    };


    return (
      <div className='potentials-view'>
        <button onClick={() => {next()}}>Search Skype Directory</button>
        <ul className='potential-friends-list'>
          { potentialFriendsJSX }
        </ul>
      </div>
    );
  }
}

const mSTP = state => {
  return {
    potentialFriends: Object.values(state.potentialFriends)
  }
}

const mDTP = dispatch => {
  return { dispatch }
}

export default connect(mSTP, mDTP)(PotentialFriendsList);