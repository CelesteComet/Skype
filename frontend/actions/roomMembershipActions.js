import * as APIUtil from '../services/roomMembershipAPIService';
import { fetchRooms } from '../actions/roomActions';
import { clearMessages } from '../actions/messageActions';

export const RECEIVE_ALL_ROOM_MEMBERSHIPS = 'RECEIVE_ALL_ROOM_MEMBERSHIPS';
export const CREATE_ROOM = 'CREATE_ROOM';

export const receiveRoomMemberships = roomMemberships => {
  return {
    type: RECEIVE_ALL_ROOM_MEMBERSHIPS,
    payload: roomMemberships 
  }
}

export const fetchRoomMemberships = () => dispatch => {
  return APIUtil.fetchRoomMemberships()
    .then(roomMemberships => {
      dispatch(receiveRoomMemberships(roomMemberships));
    }, err => {
      console.log(err);
    }) 
}

export const leaveRoom = roomId => dispatch => {
  return APIUtil.destroyRoomMembership(roomId)
    .then(roomMemberships => {
      dispatch(clearMessages());
      dispatch(fetchRooms());
    }, err => {
      console.log(err);
    })
}


