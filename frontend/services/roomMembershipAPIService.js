export const fetchRoomMemberships = () => {
  return $.ajax({
    url: 'api/room_memberships'
  });
}

export const destroyRoomMembership = roomId => {
  return $.ajax({
    url: `api/room_memberships/${roomId}`,
    method: 'DELETE'
  });
}

// Refactor into different service later

export const createRoom = (roomIds) => { 
  return $.ajax({
    url: 'api/rooms',
    method: 'POST',
    data: {room: {room_Ids: roomIds}}
  });
}

