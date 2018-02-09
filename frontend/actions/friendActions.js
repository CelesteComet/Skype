export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';
export const RECEIVE_ALL_POTENTIAL_FRIENDS = 'RECEIVE_ALL_POTENTIAL_FRIENDS';

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

