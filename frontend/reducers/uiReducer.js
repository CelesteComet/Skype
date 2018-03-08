import { 
  TOGGLE_PROFILE_MODAL, 
  TOGGLE_CONTACTS_LIST, 
  TOGGLE_CREATE_ROOM_VIEW,
  SHOW_SEARCH_DIRECTORY_BUTTON,
  HIDE_SEARCH_DIRECTORY_BUTTON,
  SHOW_MEDIA_UPLOAD,
  HIDE_MEDIA_UPLOAD,
  SHOW_IN_SEARCH,
  HIDE_IN_SEARCH, 
  MOVE_TO_ROOM } from '../actions/uiActions';
import _ from 'lodash';

const closeAll = state => {
  for (let key in state) {
    if (typeof state[key] === 'boolean') {
      state[key] = false;
    }
  } 
};

const initialState = {
  profileModalView: false,
  contactsListView: false,
  createRoomView: false,
  mediaUploadView: true, // media upload icon for input
  directoryButton: false,
  inSearch: false, // for user friend searching
  currentRoomId: 1 // change this later when implementing changing rooms
};

const uiReducer = (state = initialState, action) => {
  let newState = _.merge({}, state);
  switch (action.type) {
    case TOGGLE_PROFILE_MODAL: 
      newState.profileModalView = !newState.profileModalView;
      return newState;
    case TOGGLE_CONTACTS_LIST:
      closeAll(newState);
      newState.contactsListView = true;
      return newState;
    case TOGGLE_CREATE_ROOM_VIEW: 
      closeAll(newState);
      newState.createRoomView = true;
      return newState;
    case HIDE_SEARCH_DIRECTORY_BUTTON:
      newState.directoryButton = false;
      return newState;
    case SHOW_SEARCH_DIRECTORY_BUTTON:
      newState.directoryButton = true 
      return newState;      
    case SHOW_MEDIA_UPLOAD: 
      newState.mediaUploadView = true;
      return newState;
    case HIDE_MEDIA_UPLOAD:
      newState.mediaUploadView = false;
      return newState;
    case MOVE_TO_ROOM:
      closeAll(newState);
      newState.currentRoomId = action.payload;
      return newState;
    case SHOW_IN_SEARCH:
      newState.inSearch = true;
      return newState;
    case HIDE_IN_SEARCH:
      newState.inSearch = false;
      return newState;
    default: 
      return state;
  }
};

export default uiReducer;