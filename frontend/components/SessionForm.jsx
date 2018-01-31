import React, { Component } from 'react'

import titleService from '../services/titleService';

import MicrosoftLogos from './MicrosoftLogos';
import SessionFooter from './SessionFooter';
import SessionLogin from './SessionLogin';

class SessionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      page: 1
    };
    titleService.changeFavicon("images/microsoftIcon.png");
  }


  render() {
    const { page } = this.state;
    let currentPage = page === 2 ? "username" : "password";
    return (
      <div className="session-form">
        <MicrosoftLogos />
        <SessionLogin 
          type={ currentPage }
          />
        <SessionFooter />
      </div>
    );
  }
}

export default SessionForm;