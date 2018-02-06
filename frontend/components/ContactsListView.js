import React, { Component } from 'react';
import { connect } from 'react-redux';


class ContactsListView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { contacts } = this.props;
    const contactsJSX = contacts.map(contact => {
      return <li>{contact.username}</li>;
    })
    return (
      <div className='contacts-list-view'>
        <ul>
          { contactsJSX }
        </ul>
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