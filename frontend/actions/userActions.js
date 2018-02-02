export const CREATE_USER = 'CREATE_USER';
import { receiveCurrentUser, receiveError } from './sessionActions';
import * as APIUtil from '../services/userAPIService';

export const createUser = (user) => dispatch => {
  return APIUtil.createUser(user)
    .then(user => {
      dispatch(receiveCurrentUser(user));
    }, err => {
      dispatch(receiveError(err));
    })
}