export const TOGGLE_PROFILE_MODAL = "TOGGLE_PROFILE_MODAL";
export const TOGGLE_CONTACTS_LIST = "TOGGLE_CONTACTS_LIST";
export const SHOW_MEDIA_UPLOAD = "SHOW_MEDIA_UPLOAD";
export const HIDE_MEDIA_UPLOAD = "HIDE_MEDIA_UPLOAD";
export const MOVE_TO_ROOM = "MOVE_TO_ROOM";

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

export const moveToRoom = (roomId) => {
  return {
    type: MOVE_TO_ROOM,
    payload: roomId
  };
};

