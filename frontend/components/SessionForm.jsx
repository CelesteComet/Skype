import React, { Component, Fragment } from 'react'

import titleService from '../services/titleService';

import MicrosoftLogos from './MicrosoftLogos';
import SessionFooter from './SessionFooter';
import SessionLogin from './SessionLogin';

import Fade from '../transitions/fade';
import SlideIn from '../transitions/SlideIn';

class SessionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      page: 1
    };
    titleService.changeFavicon("images/microsoftIcon.png");

    this.forwardPage = this.forwardPage.bind(this);
    this.backPage = this.backPage.bind(this);
  }

  forwardPage() {
    this.setState({
      page: this.state.page + 1
    });
  }

  backPage() {
    if (this.state.page > 1) {
      this.setState({
        page: this.state.page - 1
      });
    }
  }

  render() {
    const { page } = this.state;
    let currentPage = page === 1 ? "username" : "password";
    return (
      <div className="session-form">
        <MicrosoftLogos />
        <SlideIn>
          { page === 1 &&
            <SessionLogin 
              type={ currentPage }
              next={ this.forwardPage }
              back={ this.backPage } />
          }
        </SlideIn>
        <SlideIn>
          { page === 2 &&
            <SessionLogin  
              type={ currentPage }
              next={ this.forwardPage }
              back={ this.backPage } />
          }
        </SlideIn>
      </div>
    );
  }
}



export default SessionForm;