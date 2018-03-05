import React from 'react';
import PropTypes from 'prop-types';
import CircleImageIcon from './CircleImageIcon';
import * as uuid from 'uuid/v1';

function ProfileItem({name, src, status, statusIcon, handleClick}) {
  return (
    <div 
      className="profile-item"
      onClick={ handleClick }>
      <div>
        <CircleImageIcon 
          src={ src }
          status={ status } 
          statusIcon={ statusIcon } />
        <div className="name-info">
          <h4>{ name }</h4>
          <p className="small gray italic">{ status }</p>
        </div>
      </div>
    </div> 
  );
}



ProfileItem.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  status: PropTypes.string,
  handleClick: PropTypes.func
};

export default ProfileItem;