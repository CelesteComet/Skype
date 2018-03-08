import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageItem from './MessageItem';

class MainMessageInterface extends Component {

  componentDidMount() {
    console.log("NEW MOUNT")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
  }

  scrollDown() {
    $(".main-message-interface")[0].scrollTop = $(".main-message-interface")[0].scrollHeight;
  }

  render() {
    const {currentUserId} = this.props;
    let received = false;
    return (
      <div className="main-message-interface">
        {this.props.messages.map((msg, i) => {

          if (currentUserId != msg.user_id) {
            received = true;
          } else {
            received = false;
          }


          // Only show the message status on the last message
          let msgStatus;
          if (i == this.props.messages.length - 1) {
            msgStatus = true;
          } else {
            msgStatus = false;
          }

          return (
            <MessageItem 
              key={msg.id}
              message={msg}
              received={received}
              msgStatus={msgStatus} />
            )
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: Object.values(state.messages),
    currentUserId: state.session.currentUser.id
  }
}

export default connect(mapStateToProps, null)(MainMessageInterface);