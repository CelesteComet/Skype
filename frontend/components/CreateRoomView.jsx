import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderMessageInterface from './HeaderMessageInterface';
import ContactsListItem from './ContactsListItem';

class CreateRoomView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsInput: '',
      contacts: this.props.contacts,
      filtered: this.props.contacts
    };
    this.handleInput = this.handleInput.bind(this);
    this.filterContacts = this.filterContacts.bind(this);
  }

  filterContacts() {
    this.setState({
      filtered: this.props.contacts.filter(contact => contact.username.match(this.state.contactsInput))
    })
  }

  handleInput(e) {
    this.setState({
      contactsInput: e.target.value
    })
  }




  render() {
    let contacts  = this.state.filtered;
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
            <input className='friend-adder' 
              placeholder='Type contact name' 
              value={this.state.contactsInput}
              onChange={this.handleInput}/>
          </div>
 
          <div className='contacts-pane'>
            <p>All Contacts</p>
            <ul>
              <li>awdawd</li>
            </ul>
          </div>


          <div className='contacts-list-scroll'>

            <ul className='contacts-list'>
              { contactsJSX }
            </ul>


          </div>
          <div className='friend-adder-bottom-buttons'>
            <div className='button-set'>
              <button className='cancel'><span>Cancel</span></button>
              <button className='confirm'><span>Confirm</span></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("MAPPING")
  return {
    contacts: Object.values(state.friends)
  }
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoomView);