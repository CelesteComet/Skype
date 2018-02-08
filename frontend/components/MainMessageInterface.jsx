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
              key={msg.id}>
              {msg.body}
            </MessageItem>)
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: Object.values(state.messages)
  }
}

export default connect(mapStateToProps, null)(MainMessageInterface);