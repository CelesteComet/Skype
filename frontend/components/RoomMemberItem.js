import React, { Component } from 'react';

class RoomMemberItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { username, status, id } = this.props.contact;
    return (
      <div className='room-member-item'>
        <div className='circle'></div>
        <div>{ username }</div>
      </div>
    )
  }
}

export default RoomMemberItem;