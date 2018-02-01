import React, { Component, Fragment } from 'react'

import RegistrationCreateAccount from './RegistrationCreateAccount';

import MicrosoftLogos from '../MicrosoftLogos';
import SessionFooter from '../SessionFooter';
import SessionLogin from '../SessionLogin';

import Fade from '../../transitions/fade';
import SlideIn from '../../transitions/SlideIn';

class RegistrationForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      page: 1
    };

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
    const pages = [
      <RegistrationCreateAccount />
    ];

    let indexToPage = this.state.page;
    let currentPage = pages[indexToPage];
    return (
      <div className="session-form">
        <MicrosoftLogos />
        <SlideIn>
          <RegistrationCreateAccount />
        </SlideIn>
      </div>
    );
  }
}



export default RegistrationForm;