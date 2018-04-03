import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Actions
import { createRoom, fetchRooms } from '../actions/roomActions';
import { moveToRoom } from '../actions/uiActions';
import { createSubscription } from '../configureSocket';
import { fetchRoomMessages } from '../actions/messageActions';

// Import Components
import ContactsListItem from './ContactsListItem';
import _ProfileItem from './_ProfileItem';


class ContactsListView extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(user) {
    let { dispatch, currentUser, fetchRooms, moveToRoom, fetchRoomMessages } = this.props;
    dispatch(createRoom([currentUser.id, user.id]))
      .then(room => {
        moveToRoom(room.id);
        fetchRooms()
          .then(() => {
            fetchRoomMessages(room.id);
          });
      })
  }

  render() {
    let { contacts } = this.props;

    // sort the contacts alphabetically
    contacts = contacts.sort((a, b) => a.username.localeCompare(b.username))

    let contactsJSX = [];

    // if we have contacts 
    if (contacts.length > 0) {
      // go through all contacts
      for (let i = 0; i < contacts.length; i++) {
        // if we are on the first one, grab the letter and dump it in
        // then dump the person in
        const { username, status } = contacts[i];
        if (i == 0) {
          let firstLetter = contacts[0].username[0];
          contactsJSX.push(<li key={Math.random()} className='alphabet-row'>{firstLetter}</li>)
          
          contactsJSX.push(
            <div className='contacts-list-item' key={Math.random()} onClick={this.handleClick.bind(null, contacts[i])}>
              <_ProfileItem 
                name={ username }
                status={ status }
                src={'/images/default-avatar.svg'}
                subtitle={'sub'} />
            </div>
          )
        } else {
          // if we are not on the first one, check if the last letter is 
          // the same as the current letter, if it is dump it in
          let lastLetter = contacts[i-1].username[0];
          let currentLetter = contacts[i].username[0];
          if (lastLetter === currentLetter) {
            contactsJSX.push(
              <div className='contacts-list-item' key={Math.random()} onClick={this.handleClick.bind(null, contacts[i])}>
                <_ProfileItem 
                  name={ username }
                  status={ status }
                  src={'/images/default-avatar.svg'}
                  subtitle={'sub'} />
              </div>
            )
            //contactsJSX.push(<li className='contacts-list-item'>{contacts[i].username}</li>)
          } else {
            contactsJSX.push(<li key={Math.random()} className='alphabet-row'>{currentLetter}</li>)
            contactsJSX.push(
              <div className='contacts-list-item' key={Math.random()} onClick={this.handleClick.bind(null, contacts[i])}>
                <_ProfileItem 
                  name={ username }
                  status={ status }
                  src={'/images/default-avatar.svg'}
                  subtitle={'sub'} />
              </div>
            )
            //contactsJSX.push(<li className='contacts-list-item'>{contacts[i].username}</li>)
          }
        }
      }
    }

    return (
      <div className='contacts-list-view'>
        <div className="header-container"> 
          <h1>Contacts</h1>
          <span>
            <i className="exclamation fa fa-exclamation-circle"></i>
            Hint: you can add new contacts by searching
          </span>
          <div className='block-container'>
            <div className='contacts-menu'>
              <ul className='menu-items'>
                <li className='active'>All Contacts</li>
                <li>Online</li>
                <li>Bots</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='contacts-list-scroll'>
          <ul className='contacts-list'>
            { contactsJSX }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: Object.values(state.friends),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    fetchRooms: () => { return dispatch(fetchRooms()) },
    moveToRoom: roomId => { dispatch(moveToRoom(roomId)) },
    fetchRoomMessages: roomId => { dispatch(fetchRoomMessages(roomId)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsListView);