import React, { Component } from 'react';

import { toggleProfileModal, showProfileModal } from '../actions/uiActions';
import { connect } from 'react-redux';

import Search from './Search';
import ProfileItem from './ProfileItem';
import RecentsList from './RecentsList';
import AsideButtons from './AsideButtons';
import PotentialFriendsList from './PotentialFriendsList';
import _ProfileItem from './_ProfileItem';
import Clouds from './Clouds';

class SideBar extends Component {
  render() {
    let { dispatch, directoryButton, currentUser, showProfileModal } = this.props;

    return (
      <div className="aside-container">
        <aside> 
          <Clouds />
          <div className="sticky-sidebar">
            
            <div className='name-heading'>
              {/*<ProfileItem 
                name={currentUser.username} 
                status={currentUser.status}
                statusIcon={true}
                canHover={true}
                src={'images/default-avatar.svg'} 
                handleClick={() => { dispatch(toggleProfileModal()) }} />*/}
              <_ProfileItem 
                name={currentUser.username}
                subtitle={"Online"}
                status={currentUser.status} 
                src={ 'images/default-avatar.svg' }
                onClick={ showProfileModal } />
            </div>


            {/* Search */}
            <Search />
            
          </div>
          <div className='big-sidebar-list'>
            { !directoryButton && <RecentsList /> }
          </div>
        </aside>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    potentialFriends: Object.values(state.potentialFriends),
    directoryButton: state.ui.directoryButton
  }
};

const mapDispatchToProps = dispatch => {
  return { 
    showProfileModal: () => { dispatch(showProfileModal()) },
    dispatch 
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);