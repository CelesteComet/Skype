import { RECEIVE_ROOM, RECEIVE_ROOMS } from '../actions/roomActions';

const roomReducer = (state = {}, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ROOMS: 
      return action.payload
      break;
    case RECEIVE_ROOM:
      newState[action.payload.id] = action.payload;
      return newState;
      break;
    default: 
      return state;
      break;
  };
};

export default roomReducer;