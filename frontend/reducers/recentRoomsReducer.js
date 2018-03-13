import _ from 'lodash';
let initialState = [];

const recentRoomsReducer = (state = initialState, action) => {
  let newState = initialState.slice();
  switch(action.type) {
    default:
      return state;
  }
};

export default recentRoomsReducer;