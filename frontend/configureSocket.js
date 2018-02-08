import { receiveMessage } from './actions/messageActions';

const configureSocket = (context, chatRoomIds, dispatch) => {
  console.log('aawdawdawwdwad');
  console.log(chatRoomIds);

  chatRoomIds.forEach(chatroomId => {

    const roomName = `room #${chatroomId}`;

    // Create a subscription to each chatroom that the user is currently in
    App[roomName] = App.cable.subscriptions.create({
      channel: "ChatChannel", room: chatroomId
    });
    console.log(`Created a subscription to ${roomName}`);

    // When a message is received
    App[roomName].received = data => {
      dispatch(receiveMessage(data));
    };


    App[roomName].disconnected = () => {
      console.log(`Disconnected from ${roomName}`);
    };

  });
  
  console.log("Subscribing to appearance channel");
  App.appearances = App.cable.subscriptions.create({channel: 'AppearanceChannel', id: 1});
  App.appearances.received = data => {
    console.log(data);
  };
};

export default configureSocket;

