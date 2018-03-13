import React, { Component } from 'react';
import Search from './Search';
import ProfileItem from './ProfileItem';
import RecentsList from './RecentsList';
import AsideButtons from './AsideButtons';
import { toggleProfileModal } from '../actions/uiActions';
import { connect } from 'react-redux';
import PotentialFriendsList from './PotentialFriendsList';


class SideBar extends Component {

  render() {
    let { dispatch, directoryButton, currentUser } = this.props;

    return (
      <div className="aside-container">
        <aside> 
          <div className="sticky-sidebar">
            {/* Cloud Background*/}
            <div className="cloud-background">
              <div className="white-circle cloud-5"></div>
              <div className="white-circle cloud-4"></div>
              <div className="white-circle cloud-3"></div>
              <div className="white-circle cloud-2"></div>
              <div className="white-circle cloud-1"></div>
              <div className="white-circle cloud-2 deep-blue-cloud"></div>
              <div className="white-circle cloud-2 light-blue-cloud"></div>
            </div>
            <div className='name-heading'>
              <ProfileItem 
                name={currentUser.username} 
                status={currentUser.status}
                statusIcon={true}
                canHover={true}
                src={'images/default-avatar.svg'} 
                handleClick={() => { dispatch(toggleProfileModal()) }} />
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
  return { dispatch }
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);