import React, { Component } from 'react';
import CircleImageIcon from './CircleImageIcon';

class ContactsListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { contact: { username, status} } = this.props;
    return (
      <div className="contacts-list-item">
        <div className="contacts-list-container">
          <CircleImageIcon 
            src='/images/default-avatar.svg'
            status={ status }
            statusIcon={true} />
          <div className='name-status-container'>
            <p className='name'>{username}</p>
            <p className='status'>{'Online'}</p>
          </div>
        </div>

      </div>
    );
  }
}

export default ContactsListItem;