export const MAKE_CALL = 'MAKE_CALL';

export const makeCall = (token, userId) => {
  return $.ajax({
    url: 'api/makeCall',
    method: 'POST',
    data: { token, userId }
  })
}


