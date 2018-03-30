export const getRecentsInfo = state => {
  const friendsMap = state.friends
  const rooms = {};
  const currentUserId = state.session.currentUser.id;

  const roomMemberships = Object.values(state.roomMemberships);
  roomMemberships.forEach(membership => {

    // prevent putting yourself into the list
    if (membership.user_id === currentUserId) { return; }

    if (rooms[membership.room_id] === undefined) {
      rooms[membership.room_id] = [];
    }

    if (friendsMap[membership.user_id] !== undefined) {
      rooms[membership.room_id].push(friendsMap[membership.user_id])
    }
  });

  // filter out all empty rooms
  for (let id in rooms) {
    if (rooms[id].length === 0) {
      delete rooms[id];
    }
  }

  return rooms;
}

export const getUserStatusMsg = usersObject => {
  let usersString = "";
  for (let id in usersObject) {
    let user = usersObject[id];
    usersString += `${user.username} `
  }
  return usersString;
};

export const orderByDate = roomObjects => {
  let orderedRooms = [];

  for (let id in roomObjects) {
    roomObjects[id].id = id;
    orderedRooms.push(roomObjects[id]);
  }

  orderedRooms = orderedRooms.sort((a,b) => {
    new Date(a.lastMsgSent) - new Date(b.lastMsgSent);
  });

  return orderedRooms;
};

