import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import messagesReducer from './messagesReducer';
import roomMembershipsReducer from './roomMembershipsReducer';
import friendReducer from './friendReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  messages: messagesReducer,
  friends: friendReducer,
  roomMemberships: roomMembershipsReducer,
  ui: uiReducer
});

export default rootReducer;