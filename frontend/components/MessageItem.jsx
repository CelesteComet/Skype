import React, { Component } from 'react';
import { connect } from 'react-redux';
import Emoji from './Emoji';

class MessageItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    // at first assume that the message is a sent message 
    let receivedMessage = false;

    const { message, received} = this.props;
    const { body, created_at, status } = message;

    return(
      <div className={'message-item ' + (received ? 'received' : '')}>
        <div className='bubble'>
          <div className='content'>
            <p>{body}</p>
            <Emoji name='cool'/>
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
