import _ from 'lodash';
import { 
  RECEIVE_ALL_ROOM_MEMBERSHIPS
} from '../actions/roomMembershipActions';

const initialState = {};

const roomMembershipsReducer = (state = initialState, action) => {
  let newState = _.merge({}, state);
  switch(action.type) {
    case RECEIVE_ALL_ROOM_MEMBERSHIPS:
      newState[action.payload] = action.payload;
      return newState;
    default:
      return state;
  }
};

export default roomMembershipsReducer;