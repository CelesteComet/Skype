import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router';

import SessionForm from './SessionForm';
import SideBar from './SideBar';
import Main from './Main';
import Footer from './Footer';

const App = () => {
  return (
    <Fragment>
      <Route path="/" component={SessionForm}/>
    </Fragment>
  );
}

export default App;















