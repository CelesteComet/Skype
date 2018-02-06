export const TOGGLE_PROFILE_MODAL = "TOGGLE_PROFILE_MODAL";
export const TOGGLE_CONTACTS_LIST = "TOGGLE_CONTACTS_LIST";

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

