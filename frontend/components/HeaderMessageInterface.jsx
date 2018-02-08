import React, { Component } from 'react';
import ContactsListItem from './ContactsListItem';
import CallButtonSet from './CallButtonSet';
import { connect } from 'react-redux';
import Peer from 'simple-peer';

class HeaderMessageInterface extends Component {

  constructor(props) {
    super(props);
    this.handleCall = this.handleCall.bind(this);
  }

  handleCall() {
    console.log("Initiating a call")
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream, error) => {
      console.log("Video audio ok!");
      var peer = new Peer({
        initiator: true,
        trickle: false,
        stream: stream
      })


      peer.on('signal', function (data) {
        console.log('SIGNAL', JSON.stringify(data))
      })

      window.peer = peer;

    });
  }

  render() {
    return (
      <div className='header-message-interface'>
        <ContactsListItem contact={ {username: "Bruce"} }/>
        <CallButtonSet />
      </div>
    );
  }
}

export default HeaderMessageInterface;

// when you click a button

// you will ask a user for input

// if the user says yes,
// we initiatate the call