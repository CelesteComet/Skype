import React, { Component } from 'react';
import Search from './Search';
import ProfileItem from './ProfileItem';
import RecentsList from './RecentsList';
import AsideButtons from './AsideButtons';


class SideBar extends Component {

  render() {
    return (
      <div className="aside-container">
        <aside> 
          {/* Cloud Background*/}
          <div className="cloud-background">
            <div className="white-circle cloud-4"></div>
            <div className="white-circle cloud-3"></div>
            <div className="white-circle cloud-2"></div>
            <div className="white-circle cloud-1"></div>
            <div className="white-circle cloud-2 deep-blue-cloud"></div>
            <div className="white-circle cloud-2 light-blue-cloud"></div>
          </div>

          <ProfileItem 
            name={'Bruce Wong'} 
            status={'Online'}
            src={'images/myicon.jpeg'} 
            handleClick={() => {console.log("HELLO")}} />

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

export default SideBar;