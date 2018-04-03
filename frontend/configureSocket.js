import { receiveMessage } from './actions/messageActions';
import { logoutUser } from './actions/sessionActions';
import { fetchRoomMemberships } from './actions/roomMembershipActions';
import { moveToRoom, toggleCallUI } from './actions/uiActions';
import { updateUserStatus } from './actions/friendActions';
import Peer from 'simple-peer';

export const createSubscription = (roomId, dispatch) => {
  const roomName = `room #${roomId}`;

  App[roomName] = App.cable.subscriptions.create({
    channel: 'ChatChannel', room: roomId 
  });

  console.log(`Created a subscription to ${roomName}`);

  // When a message is received
  App[roomName].received = data => {
    dispatch(receiveMessage(data));
  };

  App[roomName].disconnected = () => {
    console.log(`Disconnected from ${roomName}`);
  };
};

export const configureSocket = (chatRoomIds, dispatch) => {


  chatRoomIds.forEach(chatroomId => {

    const roomName = `room #${chatroomId}`;

    // Create a subscription to each chatroom that the user is currently in
    App[roomName] = App.cable.subscriptions.create({
      channel: "ChatChannel", room: chatroomId
    });
    console.log(`Created a subscription to ${roomName}`);

    // When a message is received
    App[roomName].received = data => {
      console.log("Message received");
      console.log(data);
      dispatch(receiveMessage(data));
    };

    App[roomName].disconnected = () => {
      console.log(`Disconnected from ${roomName}`);
    };

  });
  
  console.log("Subscribing to web notifications channel");

  App.appearances = App.cable.subscriptions.create({channel: 'WebNotificationsChannel'});

  App.appearances.received = (data) => {
    console.log(data);
    if (data.action === 'fetch_rooms') {
      dispatch(fetchRoomMemberships()).then(() => {
        createSubscription(data.roomId, dispatch);
      });
    } else if (data.action === 'notify_presence') {
      let {user_id, status} = data.payload;
      dispatch(updateUserStatus(user_id, status));
    } else if (data.action === 'receiveCall') {
      console.log("receive call action received")
      const { payload } = data;
      dispatch(toggleCallUI(payload))
    }
  };
};


