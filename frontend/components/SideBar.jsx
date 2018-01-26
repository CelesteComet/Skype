import React, { Component } from 'react';
import Search from './Search';


class SideBar extends Component {

  render() {
    return (
      <aside> 
        <div className="me-container">

          {/* Profile Icon */}
          <div className="profile-icon">

          </div>

          {/* Profile */}

          <div className="profile-name-status">
            <img className="profile-icon" src="images/myicon.jpeg" />
            <div className="green-circle"></div>
            <div>
              <h4>Bruce Wong</h4>
              <p className="small gray">Online</p>
            </div>
          </div>

          {/* Search */}
          <Search />


        </div>
      </aside>
    );
  }

}

export default SideBar;