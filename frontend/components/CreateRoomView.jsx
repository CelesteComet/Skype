import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderMessageInterface from './HeaderMessageInterface';
import ContactsListItem from './ContactsListItem';
import { createRoom } from '../actions/roomMembershipActions';
import { moveToRoom } from '../actions/uiActions';

class CreateRoomView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsInput: '',
      contacts: this.props.contacts,
      filtered: this.props.contacts,
      room: {},
      participants: 0
    };
    this.handleInput = this.handleInput.bind(this);
    this.filterContacts = this.filterContacts.bind(this);
    this.handleCreateRoom = this.handleCreateRoom.bind(this);
  }


  filterContacts() {
    this.setState({
      filtered: this.props.contacts.filter(contact => contact.username.match(this.state.contactsInput))
    });
  }

  handleInput(e) {
    this.setState({
      contactsInput: e.target.value
    }, () => {
      this.filterContacts();
    });
  }

  handleCreateRoom() {
    let { dispatch } = this.props;
    dispatch(createRoom(Object.keys(this.state.room)));
  }

  addToRoom(contact) {
    let newState = Object.assign({}, this.state);
    if (newState.room[contact.id] === undefined) {
      newState.participants = newState.participants + 1;
      newState.room[contact.id] = contact;
    }
    
    this.setState(newState, () => {
      
    });
  }

  cancelAll() {
    const { currentRoomId, dispatch } = this.props;
    this.setState({
      room: {},
      contactsInput: '',
      participants: 0
    })
    dispatch(moveToRoom(currentRoomId));
  }




  render() {

    // Do room stuff for adding people and removing people

    let roomJSX = Object.values(this.state.room).map(contact => {
      return (
        <span 
          key={Math.random()} 
          onClick={() => {this.addToRoom(contact)}}>
        <ContactsListItem 
          contact={ contact }/>
        </span>
      );
    })



    let contacts  = this.state.filtered;
    // sorted alphabetically
    contacts = contacts.sort((a, b) => a.username.localeCompare(b.username));

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
          contactsJSX.push(
            <span 
              key={Math.random()} 
              onClick={() => {this.addToRoom(contacts[i])}}>
            <ContactsListItem 
              contact={ contacts[i] }/>
            </span>
          )
        } else {
          // if we are not on the first one, check if the last letter is 
          // the same as the current letter, if it is dump it in
          let lastLetter = contacts[i-1].username[0];
          let currentLetter = contacts[i].username[0];
          if (lastLetter === currentLetter) {
            contactsJSX.push(
              <span 
                key={Math.random()} 
                onClick={() => {this.addToRoom(contacts[i])}}>
              <ContactsListItem 
                contact={ contacts[i] }/>
              </span>
            )
            //contactsJSX.push(<li className='contacts-list-item'>{contacts[i].username}</li>)
          } else {
            contactsJSX.push(<li key={Math.random()} className='alphabet-row'>{currentLetter}</li>)
            contactsJSX.push(
              <span 
                key={Math.random()} 
                onClick={() => {this.addToRoom(contacts[i])}}>
              <ContactsListItem 
                contact={ contacts[i] }/>
              </span>
            )
            //contactsJSX.push(<li className='contacts-list-item'>{contacts[i].username}</li>)
          }
        }
      }
    }

 

    return (
      <div className='create-room-view'>
        <HeaderMessageInterface 
          type="addFriends" 
          participants={this.state.participants}/>
        <div className='colored-container'>

          <div className='room-to-add'>
            { roomJSX }
          </div>

          <div className='input-container'>
            <input className='friend-adder' 
              placeholder='Type contact name' 
              value={this.state.contactsInput}
              onChange={this.handleInput}/>
          </div>


 
          <div className='contacts-pane'>
            <p>All Contacts</p>
          </div>


          <div className='contacts-list-scroll'>

            <ul className='contacts-list'>
              { contactsJSX }
            </ul>


          </div>
          <div className='friend-adder-bottom-buttons'>
            <div className='button-set'>
              <button 
                className='cancel'
                onClick={() => {this.cancelAll()}}>
                <span>Cancel</span>
              </button>
              <button 
                className='confirm'
                onClick={() => {this.handleCreateRoom()}}>
                <span>Confirm</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: Object.values(state.friends),
    currentRoomId: state.ui.currentRoomId
  }
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoomView);