import React, { Component } from 'react';
import ProfileItem from '../ProfileItem';
import { toggleProfileModal } from '../../actions/uiActions';
import { connect } from 'react-redux';

class ModalProfile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div className="modal-profile">
        <div className="shroud"></div>
        <div className="modal">
          <header>
          <ProfileItem 
            name='Bruce Wong'
            src='/images/myicon.jpeg'
            status='Online'
            handleClick={() => { dispatch(toggleProfileModal()) }} />

          </header>
          <div className="modal-main">
            <h3>Bruce Wong</h3>
            <p>brucewong21</p>
            <h2>Online</h2>
            <p>Notifications on</p>
            <div>
              <span>Change Activity Message</span>
            </div>
            <div className="big-buttons">Manage Account</div>
            <div className="big-buttons">Sign Out</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
};

export default connect(null, mapDispatchToProps)(ModalProfile);