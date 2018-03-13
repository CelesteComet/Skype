import React, { Component } from 'react';
import { connect } from 'react-redux';

class CallButtonSet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {createRoomView, handleCall} = this.props;
    if (!createRoomView) {
      return (
        <ul className='call-button-set'>
          <li className="video" onClick={() => {handleCall()}}></li>
          <li className="phone"></li>
          <li className="friend"></li>
        </ul>
      );
    } else {
      return <div></div>
    }
  }
}

  // profileModalView: false,
  // contactsListView: false,
  // createRoomView: false,
  // mediaUploadView: true, // media upload icon for input
  // directoryButton: false,
  // inSearch: false, // for user friend searching
  // currentRoomId: 1 

const mSTP = state => {
  return {
    contactsListView: state.ui.contactsListView,
    createRoomView: state.ui.createRoomView
  }
}


export default connect(mSTP, null)(CallButtonSet);