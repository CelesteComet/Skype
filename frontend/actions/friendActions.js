export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';
import * as APIUtil from '../services/friendAPIService';

export const receiveAllFriends = (friends) => {
  return {
    type: RECEIVE_ALL_FRIENDS,
    payload: friends
  } 
}

export const fetchAllFriends = () => dispatch => {
  return APIUtil.fetchAllFriends()
    .then(friends => {
      dispatch(receiveAllFriends(friends));
    }, err => {
      console.log(err);
    })
}