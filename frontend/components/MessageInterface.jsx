import React, { Component } from 'react';

import HeaderMessageInterface from './HeaderMessageInterface';
import MainMessageInterface from './MainMessageInterface';
import InputMessageInterface from './InputMessageInterface';

class MessageInterface extends Component {
  render() {
    return (
      <div className='message-interface'>
        <HeaderMessageInterface />
        <MainMessageInterface />
        <InputMessageInterface />
      </div>
    );
  }
}

export default MessageInterface;