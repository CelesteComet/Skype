export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';
export const RECEIVE_ALL_POTENTIAL_FRIENDS = 'RECEIVE_ALL_POTENTIAL_FRIENDS';
export const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';

import * as APIUtil from '../services/friendAPIService';

export const receiveAllFriends = (friends) => {
  return {
    type: RECEIVE_ALL_FRIENDS,
    payload: friends
  } 
}

export const receiveAllPotentialFriends = friends => {
  return {
    type: RECEIVE_ALL_POTENTIAL_FRIENDS,
    payload: friends
  }
}

export const updateUserStatus = (userId, status) => {
  return {
    type: UPDATE_USER_STATUS,
    payload: {userId, status}
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

export const findPotentialFriends = (searchTerm) => dispatch => {
  return APIUtil.findPotentialFriends(searchTerm)
    .then(friends => {
      dispatch(receiveAllPotentialFriends(friends));
    }, err => {
      console.log(err);
    })
}



// move to other source

export const createFriendship = () => dispatch => {
}

