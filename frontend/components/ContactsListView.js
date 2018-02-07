import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactsListItem from './ContactsListItem';


class ContactsListView extends Component {
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
          contactsJSX.push(<li className='alphabet-row'>{firstLetter}</li>)
          //contactsJSX.push(<li className='contacts-list-item'>{contacts[i].username}</li>)
          contactsJSX.push(<ContactsListItem contact={ contacts[i] }/>)
        } else {
          // if we are not on the first one, check if the last letter is 
          // the same as the current letter, if it is dump it in
          let lastLetter = contacts[i-1].username[0];
          let currentLetter = contacts[i].username[0];
          if (lastLetter === currentLetter) {
            contactsJSX.push(<ContactsListItem contact={ contacts[i] }/>)
            //contactsJSX.push(<li className='contacts-list-item'>{contacts[i].username}</li>)
          } else {
            contactsJSX.push(<li className='alphabet-row'>{currentLetter}</li>)
            contactsJSX.push(<ContactsListItem contact={ contacts[i] }/>)
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
            <i class="exclamation fa fa-exclamation-circle"></i>
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

        <div>
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
    contacts: Object.values(state.friends)
  }
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsListView);