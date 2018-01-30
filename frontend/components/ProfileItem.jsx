import React from 'react';
import PropTypes from 'prop-types';
import CircleImageIcon from './CircleImageIcon';

function ProfileItem({name, src, status, handleClick}) {
  return (
    <div 
      className="profile-item"
      onClick={ handleClick }>
      <div>
        <CircleImageIcon 
          src={ src }
          status={ status } />
        <div className="name-info">
          <h4>{ name }</h4>
          <p className="small gray">{ status }</p>
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