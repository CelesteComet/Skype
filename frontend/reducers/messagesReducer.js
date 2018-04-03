import _ from 'lodash';
import { 
  RECEIVE_MESSAGE,
  RECEIVE_ALL_MESSAGES,
  RECEIVE_ROOM_MESSAGES,
  CLEAR_MESSAGES,
} from '../actions/messageActions';

const initialState = {};

const messagesReducer = (state = initialState, action) => {
  let newState = _.merge({}, state);
  switch(action.type) {
    case RECEIVE_MESSAGE:
      newState[action.payload.id] = action.payload;
      return newState;
    case RECEIVE_ALL_MESSAGES:
      return action.payload;
    case RECEIVE_ROOM_MESSAGES: 
      return action.payload;
    case CLEAR_MESSAGES:
      return {};
    default:
      return state;
  }
};

export default messagesReducer;