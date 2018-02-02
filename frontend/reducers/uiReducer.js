import { TOGGLE_PROFILE_MODAL } from '../actions/uiActions';
import _ from 'lodash';

const initialState = {
  profileModalView: false
};

const uiReducer = (state = initialState, action) => {
  let newState = _.merge({}, state);
  switch (action.type) {
    case TOGGLE_PROFILE_MODAL: 
      newState.profileModalView = !newState.profileModalView
      return newState;
    default: 
      return state;
  }
};

export default uiReducer;