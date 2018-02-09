import React, { Component } from 'react';
import Search from './Search';
import ProfileItem from './ProfileItem';
import RecentsList from './RecentsList';
import AsideButtons from './AsideButtons';
import { toggleProfileModal } from '../actions/uiActions';
import { connect } from 'react-redux';


class SideBar extends Component {

  render() {
    let { dispatch, currentUsername} = this.props;

    return (
      <div className="aside-container">
        <aside> 
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

          <ProfileItem 
            name={currentUsername} 
            status={'Online'}
            src={'images/default-avatar.svg'} 
            handleClick={() => { dispatch(toggleProfileModal()) }} />

          <div className="me-container">
            {/* Search */}
            <Search />
            <AsideButtons />
            <RecentsList />
          </div>
        </aside>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUsername: state.session.currentUser.username
  }
};

const mapDispatchToProps = dispatch => {
  return { dispatch }
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);