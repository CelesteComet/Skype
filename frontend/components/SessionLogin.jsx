import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import SessionFooter from './SessionFooter';
import { loginUser } from '../actions/sessionActions';
import Typed from 'typed.js';

class SessionLogin extends Component {

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    let { username, password } = this.props.user;
    let { dispatch, history } = this.props;
    let user = { username, password};
    dispatch(loginUser(user)).then(() => {
      history.push('/dashboard');
    });
  }

  handleDemo(e) {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const user = {
      username: "Guest User",
      password: "password"
    };
    dispatch(loginUser(user)).then(() => {
      history.push('/dashboard');
    });
  }


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
        <div>
          <p>
            No account?<Link to="/users/new"> Create one!</Link>
          </p>
          <p>
            Want a <a onClick={this.handleDemo}>demo?</a>
          </p>
        </div>
      );
      buttons = (
        <div>
          <button onClick={() => {next()}}>Next</button>
        </div>
      );
    } else {
      headingText = "Enter password";
      commandTextComponent = <p>Enter the password for {this.props.user.username}</p>
      inputPlaceholderText = "Password";

      buttons = (
        <div style={buttonContainerStyles}>
          <button 
            style={buttonStyles}
            onClick={() => {back()}}
            children={'Back'}>
          </button>
          <button 
            style={buttonStyles}
            onClick={this.handleLogin}>
            Sign In
          </button>
        </div>
      );
    }

    return (
      <div className="session-form-login">
        <h1>{headingText}</h1>
        {commandTextComponent}
        <input 
          type={type === 'username' ? 'text' : 'password'}
          placeholder={inputPlaceholderText} 
          onChange={ (e) => {this.props.handleChange(e)}} />
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

const mapDispatchToProps = dispatch => {
  return { dispatch }
};

const mapStateToProps = state => {
  return {
    errors: state.session.errors
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionLogin));
