import React, { Fragment, Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from './Auth/AuthComponents';

import Dashboard from './Dashboard';
import SessionForm from './SessionForm';
import RegistrationForm from './SessionForm/RegistrationForm';


class App extends Component {
  constructor(props) {
    super(props);    
  }

  componentDidMount() {
    this.createSocket();
    debugger;
  }

  createSocket() {
    console.log("Creating socket connection");
    this.App || (this.App = {});
    App.cable = ActionCable.createConsumer();
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

export default App;















