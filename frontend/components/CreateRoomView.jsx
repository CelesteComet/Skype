import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderMessageInterface from './HeaderMessageInterface';
import ContactsListItem from './ContactsListItem';

class CreateRoomView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { contacts } = this.props;

    let contactsJSX = [];

    // if we have contacts 
    if (contacts.length > 0) {
      // go through all contacts
      for (let i = 0; i < contacts.length; i++) {
        // if we are on the first one, grab the letter and dump it in
        // then dump the person in
        if (i == 0) {
          let firstLetter = contacts[0].username[0];
          contactsJSX.push(<li key={Math.random()} className='alphabet-row'>{firstLetter}</li>)
          //contactsJSX.push(<li className='contacts-list-item'>{contacts[i].username}</li>)
          contactsJSX.push(<ContactsListItem key={Math.random()} contact={ contacts[i] }/>)
        } else {
          // if we are not on the first one, check if the last letter is 
          // the same as the current letter, if it is dump it in
          let lastLetter = contacts[i-1].username[0];
          let currentLetter = contacts[i].username[0];
          if (lastLetter === currentLetter) {
            contactsJSX.push(<ContactsListItem key={Math.random()} contact={ contacts[i] }/>)
            //contactsJSX.push(<li className='contacts-list-item'>{contacts[i].username}</li>)
          } else {
            contactsJSX.push(<li key={Math.random()} className='alphabet-row'>{currentLetter}</li>)
            contactsJSX.push(<ContactsListItem key={Math.random()} contact={ contacts[i] }/>)
            //contactsJSX.push(<li className='contacts-list-item'>{contacts[i].username}</li>)
          }
        }
      }
    }

    return (
      <div className='create-room-view'>
        <HeaderMessageInterface type="addFriends" />
        <div className='colored-container'>

          <div className='input-container'>
            <input className='friend-adder' placeholder='Type contact name' />
          </div>
 

          <div className='contacts-list-scroll'>
            <ul className='contacts-list'>
              { contactsJSX }

            </ul>


          </div>
          <div className='friend-adder-bottom-buttons'>
            <p>buttonskajdlkjwkdjadkwdwjlw</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: Object.values(state.friends)
  }
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoomView);