import React, { Component } from 'react';
import MessageInterface from './MessageInterface';
import ContactsListView from './ContactsListView';
import CreateRoomView from './CreateRoomView';
import { connect } from 'react-redux';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        {!this.props.contactsListView && !this.props.createRoomView && <MessageInterface /> }
        {this.props.contactsListView && !this.props.createRoomView && <ContactsListView /> }
        {this.props.createRoomView && <CreateRoomView />}
      </main>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    contactsListView: state.ui.contactsListView,
    createRoomView: state.ui.createRoomView
  }
}

export default connect(mapStateToProps, null)(Main);