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
  console.log(rooms);
  return rooms;
}