import _ from 'lodash';
import { 
  RECEIVE_ERROR, 
  CLEAR_ERROR, 
  RECEIVE_CURRENT_USER, 
  RECEIVE_LOGOUT } from '../actions/sessionActions';

const _nullUser = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = _nullUser, action) => {
  let newState = _.merge({}, _nullUser);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.payload;
      return newState;
    case RECEIVE_ERROR:
      newState.errors = action.payload;
      return newState;
    case CLEAR_ERROR: 
      newState.errors = [];
      return newState;
    case RECEIVE_LOGOUT:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;