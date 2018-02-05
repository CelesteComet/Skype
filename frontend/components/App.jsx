import React, { Fragment, Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from './Auth/AuthComponents';

import { connect } from 'react-redux';

import Dashboard from './Dashboard';
import SessionForm from './SessionForm';
import RegistrationForm from './SessionForm/RegistrationForm';

import configureSocket from '../configureSocket';



class App extends Component {
  constructor(props) {
    super(props);    
  }

  componentDidMount() {
    this.createSocket();
  }

  createSocket() {
    const { dispatch } = this.props;
    configureSocket(this, dispatch);
  }
  
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/login" component={ SessionForm }/>
          <Route exact path='/users/new' component={ RegistrationForm } />
          <ProtectedRoute path="/" component={ Dashboard } />
        </Switch>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
}

export default connect(null, mapDispatchToProps)(App);















