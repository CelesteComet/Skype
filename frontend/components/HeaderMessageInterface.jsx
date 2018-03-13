import React, { Component } from 'react';
import ContactsListItem from './ContactsListItem';
import CallButtonSet from './CallButtonSet';
import { connect } from 'react-redux';
import { makeCall } from '../actions/callActions';
import Peer from 'simple-peer';

class HeaderMessageInterface extends Component {

  constructor(props) {
    super(props);
    this.handleCall = this.handleCall.bind(this);
  }

  handleCall() {
    // console.log("Initiating a call")
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream, error) => {

      var peer = new Peer({
        initiator: true,
        trickle: false,
        stream: stream
      });

      peer.on('signal', function (data) {
        console.log("DATA GOT")
        makeCall(data);
      });

      window.peer = peer;

    });
  }

  render() {
    return (
      <div className='header-message-interface'>
        {this.props.type === 'message' && <ContactsListItem contact={ {username: "Bruce"} }/> }
        {this.props.type === 'addFriends' && 
          <div>
            <h1>Untitled Conversation</h1>
            <p>{this.props.participants} participants</p>
          </div>
        }
        <CallButtonSet 
          handleCall={this.handleCall.bind(null, this)}/>
      </div>
    );
  }
}

export default HeaderMessageInterface;

// when you click a button

// you will ask a user for input

// if the user says yes,
// we initiatate the call