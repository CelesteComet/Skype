import React, { Component } from 'react';

class MessageItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message } = this.props;
    const { body, created_at, status } = message;
    return(
      <div className='message-item'>
        <div className='bubble'>
          <div className='content'>
            <p>{body}</p>
          </div>
          <div className='timestamp'>
            <p>{ new Date(created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }</p>
          </div> 
        </div>
        <div className='delivery-status'>
          <span>{status === 0 ? 'Sent' : 'Sending'}</span>
        </div>
      </div>
    );
  } 
}

export default MessageItem;