import * as APIUtil from '../services/messageAPIService';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES';
export const RECEIVE_ROOM_MESSAGES = 'RECEIVE_ROOM_MESSAGES';
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';

export const receiveMessage = message => {
  return {
    type: RECEIVE_MESSAGE,
    payload: message
  }
}

export const receiveRoomMessages = messages => {
  return {
    type: RECEIVE_ROOM_MESSAGES,
    payload: messages
  }
}

export const receiveAllMessages = (messages) => {
  return {
    type: RECEIVE_ALL_MESSAGES,
    payload: messages
  }
}

export const clearMessages = () => {
  return {
    type: CLEAR_MESSAGES
  }
}

export const fetchAllMessages = () => dispatch => {
  return APIUtil.fetchAllMessages()
    .then(messages => {
      dispatch(receiveAllMessages(messages));
    }, err => {
      console.log(err);
    })
}

export const fetchRoomMessages = (roomId) => dispatch => {
  return APIUtil.fetchRoomMessages(roomId)
    .then(messages => {
      console.log(messages);
      dispatch(receiveRoomMessages(messages));
    }, err => {
      console.log(err);
    })
}

export const createMessage = message => dispatch => {
  return APIUtil.createMessage(message)
    .then(message => {
      dispatch(receiveMessage(message));
    }, err => {
      console.log(err);
    }) 
}




