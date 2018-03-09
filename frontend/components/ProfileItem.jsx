import React from 'react';
import PropTypes from 'prop-types';
import CircleImageIcon from './CircleImageIcon';
import * as uuid from 'uuid/v1';

function ProfileItem({name, src, status, statusIcon, statusId, canHover, handleClick}) {
    
    let statusMsg;
    if (!statusMsg) {
      if (status === 0) {
        statusMsg = "Offline";
      } else if (status === 1) {
        statusMsg = "Online";
      } else if (status === 2) {
        statusMsg = "Away";
      }
    }

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
          <p className="small gray italic">{ statusMsg }</p>
        </div>
      </div>
    </div> 
  );
}


export default ProfileItem;