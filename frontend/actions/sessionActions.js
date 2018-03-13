import * as APIUtil from '../services/sessionAPIService';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export const receiveCurrentUser = user => (
  {
    type: RECEIVE_CURRENT_USER,
    payload: user 
  }
);

export const receiveError = error => (
  {
    type: RECEIVE_ERROR,
    payload: error.responseJSON
  }
);

export const clearError = () => (
  {
    type: CLEAR_ERROR  
  }
)

export const receiveLogout = () => (
  {
    type: RECEIVE_LOGOUT
  }
)

export const loginUser = user => dispatch => (
  APIUtil.login(user)
    .then(user => {
      dispatch(receiveCurrentUser(user));
    }, err => {
      dispatch(receiveError(err));
    })
);

export const getUser = () => dispatch => {
  APIUtil.getUser()
    .then(user => {
      dispatch(receiveCurrentUser(user));
    }, err => {
      dispatch(receiveError(err));
    })
}

export const logoutUser = () => dispatch => (
  APIUtil.logoutUser()
    .then(() => {
      dispatch(receiveLogout());
    }, err => {
      dispatch(receiveError(err));
    })
);