import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class RegistrationCreateAccount extends Component {

  render() {
    return (
      <div className="session-form-login session-create-page">
        <h1>Create Account</h1>
        <input type='text' placeholder='someone@example.com' />
        <input type='text' placeholder='Create password' />
        <div className="session-checkbox">
          <label>
            <input type="checkbox" />
            <span>Send me promotional emails from Microsoft</span>
          </label>
        </div>
        <Link to='/'>Use a phone number instead</Link>
        <Link to='/'>Get a new email address</Link>

        <div>
          <button 
            onClick={() => {console.log("GO NEXT")}}
            children={'Next'}>
          </button>
        </div>
      </div>
    );
  }
}

export default RegistrationCreateAccount;
