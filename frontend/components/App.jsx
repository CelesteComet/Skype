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
  }

  createSocket() {
    console.log("Creating socket connection");
    this.App || (this.App = {});
    App.cable = ActionCable.createConsumer();

    console.log("Subscribing to chat channel");
    App.messages = App.cable.subscriptions.create({channel:'ChatChannel', room: 1});
    App.messages.received = data => {
      console.log(data);
    };

    App.messages.disconnected = () => {
      console.log("WOW")
    }

    console.log("Subscribing to appearance channel");
    App.appearances = App.cable.subscriptions.create({channel: 'AppearanceChannel', id: 1});
    App.appearances.received = data => {
      console.log(data);
    };



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















