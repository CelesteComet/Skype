import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import messagesReducer from './messagesReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  messages: messagesReducer,
  ui: uiReducer
});

export default rootReducer;