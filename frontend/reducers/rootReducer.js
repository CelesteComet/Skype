import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import messagesReducer from './messagesReducer';
import roomMembershipsReducer from './roomMembershipsReducer';
import friendReducer from './friendReducer';
import uiReducer from './uiReducer';
import potentialFriendsReducer from './potentialFriendsReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  messages: messagesReducer,
  friends: friendReducer,
  roomMemberships: roomMembershipsReducer,
  potentialFriends: potentialFriendsReducer,
  ui: uiReducer
});

export default rootReducer;