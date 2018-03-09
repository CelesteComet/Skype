import React, { Component } from 'react';
import CircleImageIcon from './CircleImageIcon';

class ContactsListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { contact: { username, status, statusMsg } } = this.props;
    
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
      <div className="contacts-list-item">
        <div className="contacts-list-container">
          <CircleImageIcon 
            src='/images/default-avatar.svg'
            status={ status }
            statusMsg={ statusMsg }
            statusIcon={ true } 
            canHover={ false }/>
          <div className='name-status-container'>
            <p className='name'>{username}</p>
            <p className='status'>{statusMsg}</p>
          </div>
        </div>

      </div>
    );
  }
}

export default ContactsListItem;