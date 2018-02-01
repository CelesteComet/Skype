import React, { Fragment } from 'react';
import SideBar from './SideBar';
import Main from './Main';
import Footer from './Footer';
import { logoutUser } from '../actions/sessionActions';
import { connect } from 'react-redux';

function Dashboard({dispatch}) {
  return (
    <Fragment>
      <SideBar />
      <Main />
      <Footer />
      <button onClick={() => { dispatch(logoutUser()) }}>LOGOUT</button>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return { dispatch }
};

export default connect(null, mapDispatchToProps)(Dashboard);