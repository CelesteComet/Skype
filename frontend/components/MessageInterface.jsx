import React, { Component } from 'react';

import _HeaderMessageInterface from './_HeaderMessageInterface';
import MainMessageInterface from './MainMessageInterface';
import InputMessageInterface from './InputMessageInterface';
import CallProvider           from './CallProvider';

class MessageInterface extends Component {
  render() {
    return (
      <div className='message-interface'>
        <CallProvider>
          <_HeaderMessageInterface 
            type='message' 
            src='images/default-avatar.svg' 
            title='hello'
            subtitle='nihao' />
        </CallProvider>
        <MainMessageInterface />
        <InputMessageInterface />
      </div>
    );
  }
}

export default MessageInterface;