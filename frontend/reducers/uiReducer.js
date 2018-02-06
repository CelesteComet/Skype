import { TOGGLE_PROFILE_MODAL, TOGGLE_CONTACTS_LIST } from '../actions/uiActions';
import _ from 'lodash';

const initialState = {
  profileModalView: false,
  contactsListView: false,
  currentRoomId: 1 // change this later when implementing changing rooms
};

const uiReducer = (state = initialState, action) => {
  let newState = _.merge({}, state);
  switch (action.type) {
    case TOGGLE_PROFILE_MODAL: 
      newState.profileModalView = !newState.profileModalView
      return newState;
    case TOGGLE_CONTACTS_LIST:
      newState.contactsListView = !newState.contactsListView
      return newState;
    default: 
      return state;
  }
};

export default uiReducer;