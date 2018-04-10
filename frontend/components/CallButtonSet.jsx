import React from 'react';
import PropTypes from 'prop-types';

function CallButtonSet(props) {
  if (!props.createRoomView) {
    return (
      <ul className='call-button-set'>
        <li className="video" onClick={props.handleCall}></li>
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