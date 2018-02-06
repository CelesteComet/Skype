import React, { Component } from 'react';
import MessageInterface from './MessageInterface';
import ContactsListView from './ContactsListView';
import { connect } from 'react-redux';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        {this.props.contactsListView && <MessageInterface /> }
        {!this.props.contactsListView && <ContactsListView /> }
      </main>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    contactsListView: state.ui.contactsListView
  }
}

export default connect(mapStateToProps, null)(Main);