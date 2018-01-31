import React, { Component } from 'react';

class SessionLogin extends Component {

  render() {
    const { type } = this.props;
    let buttons;
    let headingText;
    let inputPlaceholderText;
    let commandTextComponent;

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
      buttons = (
        <div>
          <button>Next</button>
        </div>
      );
    } else {
      headingText = "Enter password";
      commandTextComponent = <p>Enter the password for brucewong21</p>
      inputPlaceholderText = "Password";
      buttons = (
        <div style={buttonContainerStyles}>
          <button style={buttonStyles}>Back</button>
          <button style={buttonStyles}>Sign In</button>
        </div>
      );
    }

    return (
      <div className="session-form-login">
        <h1>{headingText}</h1>
        {commandTextComponent}
        <input 
          type="text" 
          placeholder={inputPlaceholderText} />
        <div className="session-checkbox">
          <input type="checkbox" /><label>Keep me signed in</label>
        </div>
        {buttons}
        <p>
          No account?<a href=""> Create one!</a>
        </p>
      </div>
    );
  }
}

export default SessionLogin;
