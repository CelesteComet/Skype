export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';
export const RECEIVE_ROOM = 'RECEIVE_ROOM';

export const createRoom = (roomIds) => dispatch => {
  return $.ajax({
    url: 'api/rooms',
    method: 'POST',
    data: {room: {room_Ids: roomIds}}
  });
}

export const receiveRoom = room => {
  return {
    type: RECEIVE_ROOM,
    payload: room 
  };
};

export const receiveRooms = rooms => {
  return {
    type: RECEIVE_ROOMS,
    payload: rooms 
  };
};

export const fetchRooms = () => dispatch => {
  return $.ajax({
    url: 'api/rooms'
  });
};

export const fetchRoom = roomId => dispatch => {
  return $.ajax({
    url: `api/rooms/${roomId}`
  }).then(res => {
    dispatch(receiveRoom(res));
  }, error => {
    console.log(error);
  });
};

