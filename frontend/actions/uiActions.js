export const TOGGLE_PROFILE_MODAL = "TOGGLE_PROFILE_MODAL";
export const SHOW_PROFILE_MODAL = 'SHOW_PROFILE_MODAL';
export const HIDE_PROFILE_MODAL = 'HIDE_PROFILE_MODAL';
export const SHOW_CONTACTS_LIST = "SHOW_CONTACTS_LIST";
export const TOGGLE_CREATE_ROOM_VIEW = "TOGGLE_CREATE_ROOM_VIEW";
export const SHOW_SEARCH_DIRECTORY_BUTTON = "SHOW_SEARCH_DIRECTORY_BUTTON";
export const HIDE_SEARCH_DIRECTORY_BUTTON = "HIDE_SEARCH_DIRECTORY_BUTTON";
export const SHOW_MEDIA_UPLOAD = "SHOW_MEDIA_UPLOAD";
export const HIDE_MEDIA_UPLOAD = "HIDE_MEDIA_UPLOAD";
export const MOVE_TO_ROOM = "MOVE_TO_ROOM";
export const SHOW_IN_SEARCH = "SHOW_IN_SEARCH";
export const HIDE_IN_SEARCH = "HIDE_IN_SEARCH";
export const TOGGLE_CALL_UI = "TOGGLE_CALL_UI";

export const showProfileModal = () => {
  return {
    type: SHOW_PROFILE_MODAL
  }
}

export const hideProfileModal = () => {
  return {
    type: HIDE_PROFILE_MODAL
  }
}

export const toggleProfileModal = () => {
  return {
    type: TOGGLE_PROFILE_MODAL
  }
};

export const showContactsList = () => {
  return {
    type: SHOW_CONTACTS_LIST
  }
};

export const toggleCreateRoomView = () => {
  return {
    type: TOGGLE_CREATE_ROOM_VIEW
  }
}

export const showSearchDirectoryButton = () => {
  return {
    type: SHOW_SEARCH_DIRECTORY_BUTTON 
  }
}

export const hideSearchDirectoryButton = () => {
  return {
    type: HIDE_SEARCH_DIRECTORY_BUTTON
  } 
}

export const showMediaUpload = () => {
  return {
    type: SHOW_MEDIA_UPLOAD
  }
};

export const hideMediaUpload = () => {
  return {
    type: HIDE_MEDIA_UPLOAD
  }
};

export const showInSearch = () => {
  return {
    type: SHOW_IN_SEARCH
  }
}

export const hideInSearch = () => {
  return {
    type: HIDE_IN_SEARCH
  } 
}

export const toggleCallUI= (callKey) => {
  return {
    type: TOGGLE_CALL_UI,
    payload: callKey
  }
}

export const moveToRoom = (roomId) => {
  return {
    type: MOVE_TO_ROOM,
    payload: roomId
  };
};

