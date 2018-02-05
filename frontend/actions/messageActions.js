import * as APIUtil from '../services/messageAPIService';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const receiveMessage = message => {
  return {
    type: RECEIVE_MESSAGE,
    payload: message
  }
}

export const createMessage = message => dispatch => {
  console.log(message)
  return APIUtil.createMessage(message)
    .then(message => {
      dispatch(receiveMessage(receiveMessage));
    }, err => {
      console.log(err);
    }) 
}
