import { receiveMessage } from './actions/messageActions';
import { logoutUser } from './actions/sessionActions';
import { fetchRoomMemberships } from './actions/roomMembershipActions';
import { moveToRoom, toggleCallUI } from './actions/uiActions';
import { fetchRooms, receiveRooms } from './actions/roomActions';
import { updateUserStatus } from './actions/friendActions';

export const createSubscription = (roomId, dispatch) => {
  const roomName = `room #${roomId}`;

  App[roomName] = App.cable.subscriptions.create({
    channel: 'ChatChannel', room: roomId 
  });

  // When a message is received
  App[roomName].received = data => {
      dispatch(fetchRooms())
        .then(rooms => { dispatch(receiveRooms(rooms)) });
      dispatch(receiveMessage(data));
  };

  App[roomName].disconnected = () => {
    console.log(`Disconnected from ${roomName}`);
  };
};

export const configureSocket = (chatRoomIds, dispatch, state) => {


  chatRoomIds.forEach(chatroomId => {

    const roomName = `room #${chatroomId}`;

    // Create a subscription to each chatroom that the user is currently in
    App[roomName] = App.cable.subscriptions.create({
      channel: "ChatChannel", room: chatroomId
    });

    // When a message is received
    App[roomName].received = data => {
      dispatch(fetchRooms())
        .then(rooms => { dispatch(receiveRooms(rooms)) });
      dispatch(receiveMessage(data));

    };

    App[roomName].disconnected = () => {
      console.log(`Disconnected from ${roomName}`);
    };

  });
  
  console.log("Subscribing to web notifications channel");

  App.appearances = App.cable.subscriptions.create({channel: 'WebNotificationsChannel'});

  App.appearances.received = (data) => {
    if (data.action === 'fetch_rooms') {
      dispatch(fetchRooms()).then(rooms => {
        dispatch(receiveRooms(rooms));
        createSubscription(data.payload.roomId, dispatch);
      });
    } else if (data.action === 'notify_status') {
      let {user_id, status} = data.payload;
      dispatch(updateUserStatus(user_id, status));
      dispatch(fetchRooms())
        .then(rooms => { dispatch(receiveRooms(rooms)); });
    } else if (data.action === 'receiveCall') {
      const { payload } = data;
      dispatch(toggleCallUI(payload))
    }
  };
};


