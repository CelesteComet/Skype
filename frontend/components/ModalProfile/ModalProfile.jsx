import React, { Component } from 'react';
import ProfileItem from '../ProfileItem';
import CircleImageIcon from '../CircleImageIcon';
import { toggleProfileModal } from '../../actions/uiActions';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/sessionActions';


class ModalProfile extends Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    const { dispatch } = this.props;
    dispatch(toggleProfileModal());
    dispatch(logoutUser());
  }

  render() {
    const { dispatch, currentUsername } = this.props;
    return (
      <div className="modal-profile">
        <div className="shroud"></div>
        <div className="modal">
          <header>
          <ProfileItem 
            name={ currentUsername }
            src='/images/default-avatar.svg'
            status='Online'
            handleClick={() => { dispatch(toggleProfileModal()) }} />

          </header>
          <div className="modal-main">
            <CircleImageIcon 
              src='/images/default-avatar.svg'
              status='Online' />
            <div className="modal-content">
              <h3>{currentUsername}</h3>
              <p>{currentUsername}</p>
              <h2>Online<i className="fa fa-chevron-down icon-blue" aria-hidden="true"></i></h2>
              <p className="notifications">Notifications on</p>
              <div>
                <span>Change Activity Message</span>
              </div>
              <div className="big-buttons first">
                <i className="fa fa-cog icon-blue"></i>
                <p>Manage Account</p>
              </div>
              <div className="big-buttons">
                <i className="fa fa-sign-out icon-blue" aria-hidden="true"></i>
                <p className="logout" onClick={this.handleLogout}>Sign Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUsername: state.session.currentUser.username
  }
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalProfile);