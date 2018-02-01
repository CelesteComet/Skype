import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router';

import SessionForm from './SessionForm';
import RegistrationForm from './Session/RegistrationForm';
import SideBar from './SideBar';
import Main from './Main';
import Footer from './Footer';

const App = () => {
  return (
    <Fragment>
      <Route exact path="/" component={ SessionForm }/>
      <Route exact path='/users/new' component={ RegistrationForm } />
    </Fragment>
  );
}

export default App;















