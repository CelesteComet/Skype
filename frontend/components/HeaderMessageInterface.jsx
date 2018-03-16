import React, { Component } from 'react';
import ContactsListItem from './ContactsListItem';
import CallButtonSet from './CallButtonSet';
import { connect } from 'react-redux';
import { makeCall } from '../actions/callActions';
import { displayCallUI } from '../actions/uiActions';
import Peer from 'simple-peer';

class HeaderMessageInterface extends Component {

  constructor(props) {
    super(props);
    this.handleCall = this.handleCall.bind(this);
  }

  handleCall() {
    // console.log("Initiating a call")
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream, error) => {

      window.peer = new Peer({
        initiator: true,
        trickle: false,
        stream: stream
      });


      window.peer.on('signal', function (data) {
        // give the key to the receiver
        makeCall(data, 2);
      });

      window.peer.on('stream', function (stream) {
        // got remote video stream, now let's show it in a video tag
        console.log("WE ARE NOW STREAMING")
        console.log(stream);
        var video = document.createElement('video')
        document.body.appendChild(video)

        video.src = window.URL.createObjectURL(stream)
        video.play()
      })

    });
  }

  handleReceiveCall(data) {
    console.log(data);
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream, error) => {

      window.peer.stream = stream;
      window.peer.signal(data.data[0]);

      window.peer.on('signal', function (rdata) {
        console.log("WOWOWOW")
        makeCall(rdata, 1);
      })

      window.peer.on('stream', function (stream) {
        // got remote video stream, now let's show it in a video tag
        console.log("WE ARE NOW STREAMING")
        console.log(stream);
        var video = document.createElement('video')
        document.body.appendChild(video)

        video.src = window.URL.createObjectURL(stream)
        video.play()
      })
    });
  }

  render() {
    const { callUI, callKey } = this.props;

    const callButtons = (
      <div>
        <button onClick={this.handleReceiveCall.bind(null, callKey)}>accept call</button>
      </div>
    );
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
        {callUI && callButtons }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    callUI: state.ui.callUI,
    callKey: state.ui.callKey
  }
};

export default connect(mapStateToProps, null)(HeaderMessageInterface);

// when you click a button

// you will ask a user for input

// if the user says yes,
// we initiatate the call