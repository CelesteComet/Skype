import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import messagesReducer from './messagesReducer';
import roomMembershipsReducer from './roomMembershipsReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  messages: messagesReducer,
  roomMemberships: roomMembershipsReducer,
  ui: uiReducer
});

export default rootReducer;