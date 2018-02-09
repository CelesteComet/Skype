import { 
  TOGGLE_PROFILE_MODAL, 
  TOGGLE_CONTACTS_LIST, 
  TOGGLE_CREATE_ROOM_VIEW,
  SHOW_MEDIA_UPLOAD,
  HIDE_MEDIA_UPLOAD,
  MOVE_TO_ROOM } from '../actions/uiActions';
import _ from 'lodash';

const initialState = {
  profileModalView: false,
  contactsListView: false,
  createRoomView: false,
  mediaUploadView: true, // media upload icon for input
  currentRoomId: 1 // change this later when implementing changing rooms
};

const uiReducer = (state = initialState, action) => {
  let newState = _.merge({}, state);
  switch (action.type) {
    case TOGGLE_PROFILE_MODAL: 
      newState.profileModalView = !newState.profileModalView;
      return newState;
    case TOGGLE_CONTACTS_LIST:
      newState.contactsListView = !newState.contactsListView;
      return newState;
    case TOGGLE_CREATE_ROOM_VIEW: 
      newState.createRoomView = !newState.createRoomView;
      return newState;
    case SHOW_MEDIA_UPLOAD: 
      newState.mediaUploadView = true;
      return newState;
    case HIDE_MEDIA_UPLOAD:
      newState.mediaUploadView = false;
      return newState;
    case MOVE_TO_ROOM:
      newState.currentRoomId = action.payload;
      return newState;
    default: 
      return state;
  }
};

export default uiReducer;