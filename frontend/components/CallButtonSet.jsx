import React from 'react';
import PropTypes from 'prop-types';

function CallButtonSet({ handleCall, createRoomView }) {
  if (!createRoomView) {
    return (
      <ul className='call-button-set'>
        <li className="video" onClick={() => {handleCall()}}></li>
        <li className="phone"></li>
        <li className="friend"></li>
      </ul>
    );
  } else {
    return null;
  }
};

CallButtonSet.propTypes = {
  handleCall: PropTypes.func,
  createRoomView: PropTypes.bool
};

export default CallButtonSet;