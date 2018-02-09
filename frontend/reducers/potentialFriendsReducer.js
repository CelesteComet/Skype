import _ from 'lodash';
import { 
 RECEIVE_ALL_POTENTIAL_FRIENDS 
} from '../actions/friendActions';

const initialState = {};

const potentialFriendsReducer = (state = initialState, action) => {
  let newState = _.merge({}, state);
  switch(action.type) {
    case RECEIVE_ALL_POTENTIAL_FRIENDS:
      return action.payload
    default:
      return state;
  }
};

export default potentialFriendsReducer;