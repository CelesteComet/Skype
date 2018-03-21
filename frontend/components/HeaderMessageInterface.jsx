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

// function showMyFace() {
//   navigator.mediaDevices.getUserMedia({audio:true, video:true})
//     .then(stream => yourVideo.srcObject = stream)
//     .then(stream => pc.addStream(stream));
// }

  handleCall() {
    // Get the mediaStream object
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then((localStream, error) => {
      
      var myVideo = document.createElement('video');
      document.body.appendChild(myVideo);
      myVideo.src = window.URL.createObjectURL(localStream);
      myVideo.play();

      window.pc.addStream(localStream);

      




      // var offerOptions = {
      //   offerToReceiveAudio: 1,
      //   offerToReceiveVideo: 1
      // };

      // pc.createOffer(offerOptions)
      //   .then(offer => pc.setLocalDescription(offer))
      //   .then(() => {
      //     makeCall(pc.localDescription.toJSON(), "2");
      //   });

        


      /* Setup onaddstream callback for PeerConnection. When stream is added
         the UI for the video should be displayed. */
      // pc.onaddstream = event => {
      //   var stream = event.stream;
      //   var video = document.createElement('video');
      //   document.body.appendChild(video);
      //   video.src = window.URL.createObjectURL(remoteStream);
      //   video.play();
      // };

      // pc.addStream(stream);



      // stream.onaddtrack = () => {
      //   console.log("ADDING");
      // }
      // var call = peer.call("2", stream);

      // makeCall(null, 2);

    });
  }

  handleReceiveCall(data) {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then((stream, error) => {
      let msg = data.data[0];

      let mRTCSessionDescription = new RTCSessionDescription(msg);
      pc.setRemoteDescription(msg);
      pc.addStream(stream);
      pc.createAnswer()
        .then(answer => pc.setLocalDescription(answer))
        .then(() => makeCall(pc.localDescription.toJSON(), "1"));

    });

      // .then(() => pc.createAnswer())
      // .then(answer => pc.setLocalDescription(answer))
      // .then(() => makeCall(pc.localDescription.toJSON(), "1"));





// pc.setRemoteDescription(new RTCSessionDescription(msg.sdp))
//               .then(() => pc.createAnswer())
//               .then(answer => pc.setLocalDescription(answer))
//               .then(() => sendMessage(yourId, JSON.stringify({'sdp': pc.localDescription})));
  }

  render() {
    const { callUI, callKey, createRoomView } = this.props;

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
          createRoomView={ createRoomView }
          handleCall={this.handleCall.bind(null, this)}/>
        {callUI && callButtons }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    callUI: state.ui.callUI,
    callKey: state.ui.callKey,
    createRoomView: state.ui.createRoomView
  }
};

export default connect(mapStateToProps, null)(HeaderMessageInterface);

// when you click a button

// you will ask a user for input

// if the user says yes,
// we initiatate the call