import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: function() {
    return {
      currentUser: {}
    }
  }
});

export default rootReducer;