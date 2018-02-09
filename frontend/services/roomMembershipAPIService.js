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

// Refactor into different service later

export const createRoom = (roomIds) => {
  return $.ajax({
    url: 'api/rooms',
    method: 'POST',
    data: {room_Ids: roomIds}
  })   
}

