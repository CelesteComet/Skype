export const fetchRoomMemberships = () => {
  return $.ajax({
    url: 'api/room_memberships'
  })
};

export const logoutUser = () => {
  return $.ajax({
    url: 'api/session',
    method: 'DELETE'
  })
};

