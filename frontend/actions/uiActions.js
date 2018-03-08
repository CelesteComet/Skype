export const TOGGLE_PROFILE_MODAL = "TOGGLE_PROFILE_MODAL";
export const TOGGLE_CONTACTS_LIST = "TOGGLE_CONTACTS_LIST";
export const TOGGLE_CREATE_ROOM_VIEW = "TOGGLE_CREATE_ROOM_VIEW";
export const SHOW_SEARCH_DIRECTORY_BUTTON = "SHOW_SEARCH_DIRECTORY_BUTTON";
export const HIDE_SEARCH_DIRECTORY_BUTTON = "HIDE_SEARCH_DIRECTORY_BUTTON";
export const SHOW_MEDIA_UPLOAD = "SHOW_MEDIA_UPLOAD";
export const HIDE_MEDIA_UPLOAD = "HIDE_MEDIA_UPLOAD";
export const MOVE_TO_ROOM = "MOVE_TO_ROOM";
export const SHOW_IN_SEARCH = "SHOW_IN_SEARCH";
export const HIDE_IN_SEARCH = "HIDE_IN_SEARCH";

export const toggleProfileModal = () => {
  return {
    type: TOGGLE_PROFILE_MODAL
  }
};

export const toggleContactsList = () => {
  return {
    type: TOGGLE_CONTACTS_LIST
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

export const moveToRoom = (roomId) => {
  return {
    type: MOVE_TO_ROOM,
    payload: roomId
  };
};

