import React, { Component } from 'react';

class RoomMemberItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { username, status, id } = this.props.contact;
    let color;
    if (status == 0) {
      color = 'none';
    } else if (status == 1) {
      color = '#8CB738';
    } else if (status == 2) {
      color = '#F6D24B';
    }

    let circleStyle = {
      'background': color,
      'borderColor': color
    };

    return (
      <div className='room-member-item'>
        <div className='circle' style={circleStyle}></div>
        <div>{ username }</div>
      </div>
    )
  }
}

export default RoomMemberItem;