import React from 'react';
import PropTypes from 'prop-types';
import CircleImageIcon from './CircleImageIcon';
import * as uuid from 'uuid/v1';

function ProfileItem({name, src, status, statusIcon, statusId, canHover, handleClick}) {
  return (
    <div 
      className="profile-item"
      onClick={ handleClick }>
      <div>
        <CircleImageIcon 
          src={ src }
          status={ status } 
          statusIcon={ statusIcon } 
          canHover={ canHover }/>
        <div className="name-info">
          <h4>{ name }</h4>
          <p className="small gray italic">{ status }</p>
        </div>
      </div>
    </div> 
  );
}


export default ProfileItem;