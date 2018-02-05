import React, { Component } from 'react';

class InputMessageInterface extends Component {
  render() {
    return (
      <div className='input-message-interface'>
        <div className='form-holder'>
          <div className='input-header'>
            <p>Via <a>Skype</a></p>
          </div>
          <div className='input-message-input'>
            <textarea />
            <div className='icon-set'>
              <i className="fa fa-paperclip" aria-hidden="true"></i>
              <i className="fa fa-picture-o" aria-hidden="true"></i>
              <i className="fa fa-id-card" aria-hidden="true"></i>
              <i className="fa fa-smile-o" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InputMessageInterface;