import React, { Component } from 'react';

class MessageItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { body, sender, status, date } = this.props;
    return(
      <div className='message-item'>
        <div className='bubble'>
          <div className='content'>
            <p>Im some content</p>
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