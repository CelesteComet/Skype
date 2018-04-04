import React, { Component } from 'react';

// Components
import _ProfileItem from './_ProfileItem';
import CircleImageIcon from './CircleImageIcon';

// Redux 
import { connect } from 'react-redux';

// Actions
import { hideProfileModal } from '../actions/uiActions';
import { logoutUser } from '../actions/sessionActions';

const statusText = {
  1: "Online",
  2: "Away",
  3: "Offline"
};

class ModalProfile extends Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    const { hideProfileModal, logoutUser } = this.props;
    hideProfileModal();
    logoutUser();
  }

  render() {

    const { 
      dispatch, 
      currentUser,
      hideProfileModal
    } = this.props;

    const { username, status } = currentUser;

    return (
      <div className="modal-profile">

        {/* Modal Shroud */}
        <div className="shroud"></div>

        {/* Modal */}
        <div className="modal">

          {/* Icon Header */}
          <header>
            <_ProfileItem 
              name={ username }
              subtitle={"Online"}
              status={ status } 
              src={ 'images/default-avatar.svg' }
              onClick={ hideProfileModal } />
          </header>

          {/* Modal Main */}
          <div className="modal-main">

            {/* Large Image Circle */}
            <div className='img-container'>
              <img src='/images/default-avatar.svg' />
            </div>
  

            {/* Modal Content */}
            <div className="modal-content">
              <_ProfileItem 
                name={ username }
                subtitle={"Online"}
                status={ status } 
                src={ 'images/default-avatar.svg' } />
                
              <h2>{ statusText[status] }<i className="fa fa-chevron-down icon-blue" aria-hidden="true"></i></h2>
              <p className="notifications">Notifications on</p>
              <div>
                <span>Change Activity Message</span>
              </div>
              <div className="big-buttons first">
                <i className="fa fa-cog icon-blue"></i>
                <p>Manage Account</p>
              </div>
              <div className="big-buttons" onClick={ this.handleLogout }>
                <i className="fa fa-sign-out icon-blue" aria-hidden="true"></i>
                <p className="logout">Sign Out</p>
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
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    showProfileModal: () => { dispatch(showProfileModal()) },
    hideProfileModal: () => { dispatch(hideProfileModal()) },
    logoutUser: () => { dispatch(logoutUser()) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalProfile);