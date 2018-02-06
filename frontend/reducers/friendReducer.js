import _ from 'lodash';
import { 
  RECEIVE_ALL_FRIENDS
} from '../actions/friendActions';

const initialState = {};

const friendsReducer = (state = initialState, action) => {
  let newState = _.merge({}, state);
  switch(action.type) {
    case RECEIVE_ALL_FRIENDS:
      return action.payload
    default:
      return state;
  }
};

export default friendsReducer;