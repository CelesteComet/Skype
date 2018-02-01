import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SessionFooter from './SessionFooter';

class SessionLogin extends Component {

  render() {
    const { type, next, back } = this.props;
    let buttons;
    let headingText;
    let inputPlaceholderText;
    let commandTextComponent;
    let createForgotComponent;

    let buttonStyles = {
      width: '49%'
    };

    let buttonContainerStyles = {
      'display': 'flex',
      'justifyContent': 'space-between'
    };

    if (type == 'username') {
      headingText = "Sign In";
      inputPlaceholderText = "Email, phone or Skype";

      createForgotComponent = (
        <p>
          No account?<Link to="/users/new"> Create one!</Link>
        </p>
      );
      buttons = (
        <div>
          <button onClick={() => {next()}}>Next</button>
        </div>
      );
    } else {
      headingText = "Enter password";
      commandTextComponent = <p>Enter the password for brucewong21</p>
      inputPlaceholderText = "Password";

      buttons = (
        <div style={buttonContainerStyles}>
          <button 
            style={buttonStyles}
            onClick={() => {back()}}
            children={'Back'}>
          </button>
          <button style={buttonStyles}>Sign In</button>
        </div>
      );
    }

    return (
      <div className="session-form-login">
        <h1>{headingText}</h1>
        {commandTextComponent}
        <input 
          type={type === 'username' ? 'text' : 'password'}
          placeholder={inputPlaceholderText} />
        { type === 'password' && 
          <div className="session-checkbox">
            <input type="checkbox" /><label>Keep me signed in</label>
          </div>
        }
        {buttons}
        {createForgotComponent}
        <SessionFooter />
      </div>
    );
  }
}

export default SessionLogin;
