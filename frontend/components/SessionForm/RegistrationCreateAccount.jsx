import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser } from '../../actions/userActions';



class RegistrationCreateAccount extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: this.props.errors
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      errors: newProps.errors
    })
  }


  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit() {
    const { dispatch } = this.props;
    dispatch(createUser(this.state)).then(() => {
      this.props.history.push('/dashboard');
    });
  }

  render() {
    const { dispatch, errors } = this.props;
    return (
      <div className="session-form-login session-create-page">
        <h1>Create Account</h1>
        {errors.map(error => (
          <p>{error}</p>
        ))}
        <input 
          type='text' 
          placeholder='someone@example.com' 
          name='username'
          onChange={this.handleChange} />
        <input 
          type='text' 
          placeholder='Create password' 
          name='password'
          onChange={this.handleChange} />
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
            onClick={this.handleSubmit}
            children={'Next'}>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.session.errors
  }
};

const mapDispatchToProps = dispatch => {
  return { dispatch }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegistrationCreateAccount));
