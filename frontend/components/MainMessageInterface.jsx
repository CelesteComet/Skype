import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageItem from './MessageItem';

class MainMessageInterface extends Component {
  render() {
    return (
      <div className="main-message-interface">
        {this.props.messages.map(msg => {
          return (
            <MessageItem 
              key={msg.id}
              message={msg}
              currentUserId={currentUserId}/>
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