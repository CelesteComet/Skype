import _ from 'lodash';
import { 
  RECEIVE_ALL_FRIENDS,
  UPDATE_USER_STATUS
} from '../actions/friendActions';

const initialState = {};

const friendsReducer = (state = initialState, action) => {
  let newState = _.merge({}, state);
  switch(action.type) {
    case RECEIVE_ALL_FRIENDS:
      return action.payload
    case UPDATE_USER_STATUS:
      newState[action.payload.userId].status = action.payload.status;
      return newState;
    default:
      return state;
  }
};

export default friendsReducer;