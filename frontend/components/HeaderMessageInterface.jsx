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

    peer.on('call', function(call) {
      console.log("CALL RECEIVED!!!")
      console.log(call);

      call.on('stream', function(remoteStream) {
        console.log("RECEIVED");
        console.log(remoteStream);
      });

      // navigator.mediaDevices.getUserMedia({video: true, audio: true}, function(stream) {

      //   call.answer(stream); // Answer the call with an A/V stream.
      //   call.on('stream', function(remoteStream) {
      //     console.log(remoteStream)
      //     var video = document.createElement('video')
      //     document.body.appendChild(video)

      //     video.src = window.URL.createObjectURL(remoteStream)
      //     video.play()
      //   });
      // }, function(err) {
      //   console.log('Failed to get local stream' ,err);
      // });
    });
  }

  handleCall() {


    // console.log("Initiating a call")
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream, error) => {
      var call = window.peer.call("2", stream);

      makeCall(null, 2);

      call.on('stream', function(remoteStream) {
        console.log("RECEIVING REMOTE STREAM");
        console.log(remoteStream)
        var video = document.createElement('video')
        document.body.appendChild(video)

        video.src = window.URL.createObjectURL(remoteStream)
        video.play()
      });




    

    });
  }

  handleReceiveCall(data) {

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