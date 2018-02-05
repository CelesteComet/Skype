import { receiveMessage } from './actions/messageActions';

const configureSocket = (context, dispatch) => {
  console.log("Creating socket connnection");
  if (!context.App) {
    context.App = {};
  }

  App.cable = ActionCable.createConsumer();

  console.log("Subscribing to chat channel");
  App.messages = App.cable.subscriptions.create({channel:'ChatChannel', room: 1});
  App.messages.received = data => {
    dispatch(receiveMessage(data));
  };

  App.messages.disconnected = () => {
    console.log("Disconnected")
  }

  console.log("Subscribing to appearance channel");
  App.appearances = App.cable.subscriptions.create({channel: 'AppearanceChannel', id: 1});
  App.appearances.received = data => {
    console.log(data);
  };
};

export default configureSocket;

