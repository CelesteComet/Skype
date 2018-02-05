import _ from 'lodash';
import { 
  RECEIVE_MESSAGE
} from '../actions/messageActions';

const initialState = {};

const messagesReducer = (state = initialState, action) => {
  let newState = _.merge({}, state);
  switch(action.type) {
    case RECEIVE_MESSAGE:
      console.log(newState)
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
};

export default messagesReducer;