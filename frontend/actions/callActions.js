export const makeCall = (token, userId) => dispatch => {
  return $.ajax({
    url: 'api/makeCall',
    method: 'POST',
    data: { token, userId }
  });
};

export const sendMessage = (userIds, payload) => {
  return $.ajax({
    url: 'api/sendMessage',
    method: 'POST',
    data: { userIds , payload }
  });
};


