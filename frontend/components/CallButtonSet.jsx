import React, { Component } from 'react';

class CallButtonSet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className='call-button-set'>
        <li className="video"></li>
        <li className="phone"></li>
        <li className="friend"></li>
      </ul>
    );
  }
}

export default CallButtonSet;