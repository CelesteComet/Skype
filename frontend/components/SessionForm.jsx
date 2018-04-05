import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import { clearError } from '../actions/sessionActions';

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

  handleChange(e, property) {
    this.setState({
      [property]: e.target.value
    })
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(clearError());
  }

  render() {
    const { page } = this.state;
    const { errors } = this.props;
    let currentPage = page === 1 ? "username" : "password";
    return (
      <div className="session-form">
        <MicrosoftLogos />
        {errors && errors.map((error, i) => (
          <p key={i}>{error}</p>
        ))}
        <SlideIn>
          { page === 1 &&
            <SessionLogin 
              type={ currentPage }
              next={ this.forwardPage }
              back={ this.backPage }
              handleChange={ (e) => {this.handleChange(e, 'username')} } 
              user={this.state} />
          }
        </SlideIn>
        <SlideIn>
          { page === 2 &&
            <SessionLogin  
              type={ currentPage }
              next={ this.forwardPage }
              back={ this.backPage } 
              handleChange={ (e) => {this.handleChange(e, 'password')} } 
              user={ this.state } />
          }
        </SlideIn>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.session.errors
  };
};

const mapDispatchToProps = dispatch => ( { dispatch } );

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);





