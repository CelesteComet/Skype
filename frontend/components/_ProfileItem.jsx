import React, { Component } from 'react';
import PropTypes from 'prop-types';

function _ProfileItem({name, subtitle, status, src, onClick}) {

  // change status circle color based on login status
  let color = "";
  if (status === 2) {
    color += 'green';
  } else if (status === 3) {
    color += 'yellow';
  } else if (status === 4) {
    color += 'red'
  } 

  let subtitleLength = 0;

  if (Array.isArray(subtitle)) {
    subtitle.forEach(txtBlk => {
      if (typeof txtBlk === 'string') {
        subtitleLength += txtBlk.length;
      } else {
        subtitleLength += 1;
      }
    });
  } else {
    subtitle = subtitle.split('');
    subtitleLength = subtitle.length;
  }

  if (subtitleLength > 20) {
    let splitSub = [];
    subtitle.forEach(e => {
      if (e.length > 1) {
        e.split('').forEach(j => {
          splitSub.push(j);
        })
      } else {
        splitSub.push(e)
      }
    });
    subtitle = splitSub.slice(0,30).join('') + '...';
  }

  return (
    <div onClick={ onClick } className="_profile-item">
      {/* Icon */}
      <div className='icon-container'>
        <img src={ src }/>
        <div className={`status-circle ${color}`}></div>
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
  status: PropTypes.number,
  onClick: PropTypes.func
};

export default _ProfileItem;