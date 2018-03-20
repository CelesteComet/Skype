import React, { Component } from 'react';
import PropTypes from 'prop-types';



function _ProfileItem({name, subtitle, status, src}) {
  return (
    <div className="_profile-item">

      {/* Icon */}
      <div className='icon-container'>
        <img src={ src }/>
        <div className='status-circle'>
        </div>
      </div>

      {/* Other Stuff */}
      <div className='_profile-texts'>
        <div>{ name }</div>
        <div className='sub'>{ subtitle }</div>
        {/*<div>{ status }</div>*/}
      </div>

    </div>
  );
}

_ProfileItem.propTypes = {
  name: PropTypes.string,
  subtitle: PropTypes.string,
  status: PropTypes.number
};

export default _ProfileItem;