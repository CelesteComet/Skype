import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Renders component if user is logged out, otherwise redirects to /
const Auth = ({component: Component, path, loggedIn, exact}) => {
  return (
    <Route path={path} exact={exact} render={(props) => {
      if (!loggedIn) { return <Component {...props} />; }
      return <Redirect to="/" />
    }} />
  );
};

// Renders component if user is logged in, otherwise redirect to /login
const Protected = ({component: Component, path, loggedIn, exact}) => {
  return (
    <Route path={path} exact={exact} render={(props) => {
      if (loggedIn) { return <Component {...props} />; }
      return <Redirect to="/login" />
    }} />
  );
};

// access the Redux state to check if the user is logged in
const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
}

// connect Auth to the redux state
export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

// connect Protected to the redux state
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));

