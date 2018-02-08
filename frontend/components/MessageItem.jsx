import React, { Component } from 'react';

class MessageItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message } = this.props;
    const { body } = message;
    return(
      <div className='message-item'>
        <div className='bubble'>
          <div className='content'>
            <p>{body}</p>
          </div>
          <div className='timestamp'>
            <p>Im a timestamp</p>
          </div> 
        </div>
        <div className='delivery-status'>
          <span>{'sent'}</span>
        </div>
      </div>
    );
  } 
}

export default MessageItem;