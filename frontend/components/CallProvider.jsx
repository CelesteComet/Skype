import React, { Component } from 'react';
import * as Peer from 'simple-peer';
import { connect } from 'react-redux';

// Import Actions
import { makeCall } from '../actions/callActions';

class CallProvider extends Component {
  constructor(props) {
    super(props);
    this.peer = new Peer.default({initiator: false, trickle: false})
    this.handleCall = this.handleCall.bind(this);
  }

  handleCall() {
    const { otherUserId, makeCall} = this.props;
    this.peer = new Peer.default({ initiator: true, trickle: false });
    this.peer.on('signal', function (data) {
      // send the call signal
      makeCall(data, otherUserId);
    })
  }

  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, { handleCall: this.handleCall })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state.rooms[state.ui.currentRoomId]) {
    return {
      otherUserId: Object.keys(state.rooms[state.ui.currentRoomId].users)[0],
      currentRoomId: state.ui.currentRoomId
    }
  } else {
    return {
      currentRoomId: state.ui.currentRoomId
    }
  }
};

const mapDispatchToProps = dispatch => {
  return {
    makeCall: (data, otherUserId) => { dispatch(makeCall(data, otherUserId)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CallProvider);