import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: function() {
    return {
      entities: () => {
        return {
          meta: {
            title: "HELLO"
          }
        }; 
      },
      currentUser: {}
    }
  }
});

export default rootReducer;