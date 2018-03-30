import React, { Component } from 'react';

import _HeaderMessageInterface from './_HeaderMessageInterface';
import MainMessageInterface from './MainMessageInterface';
import InputMessageInterface from './InputMessageInterface';

class MessageInterface extends Component {
  render() {
    return (
      <div className='message-interface'>
        <_HeaderMessageInterface 
          type='message' 
          src='images/default-avatar.svg' 
          title='hello'
          subtitle='nihao' />
        <MainMessageInterface />
        <InputMessageInterface />
      </div>
    );
  }
}

export default MessageInterface;