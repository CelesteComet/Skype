import React, { Component } from 'react';

// Import Actions
import { fetchRoom }        from '../actions/roomActions';
import { makeCall }         from '../actions/callActions';
import { displayCallUI }    from '../actions/uiActions';

// Import Selectors 
import { getUserStatusMsg } from './Selectors';

// Import UI Components
import ContactsListItem     from './ContactsListItem';
import _ProfileItem         from './_ProfileItem';

import CallButtonSet from './CallButtonSet';
import { connect } from 'react-redux';

function _HeaderMessageInterface(props) {
  const { title, subtitle, status, src, handleCall } = props;
  console.log(props);
  return (
    <div className='header-message-interface'>
      <_ProfileItem
        name={title}
        subtitle={subtitle}
        status={status} 
        src={src} />
      <CallButtonSet 
        handleCall={ handleCall } /> 
    </div>
  );
}

export default _HeaderMessageInterface;
