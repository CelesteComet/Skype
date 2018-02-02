import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  ui: uiReducer
});

export default rootReducer;