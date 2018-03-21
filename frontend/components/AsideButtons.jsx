import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  showContactsList, 
  toggleCreateRoomView
} from '../actions/uiActions';

class AsideButtons extends Component {
  render() {
    const { showContactsList, toggleCreateRoomView } = this.props;
    return (
      <ul className="aside-buttons">
        <span>
          <li className='aside-contacts' onClick={ showContactsList }></li>
          <li className='aside-robot'><span></span></li>
          <li className='aside-phonepad'><span></span></li>
          <li className='aside-gear'><span></span></li>
        </span>
        <li className='aside-plus' onClick={ toggleCreateRoomView }></li>
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    showContactsList: () => { dispatch(showContactsList()); },
    toggleCreateRoomView: () => { dispatch(toggleCreateRoomView()); }
  }
};

export default connect(null, mapDispatchToProps)(AsideButtons);