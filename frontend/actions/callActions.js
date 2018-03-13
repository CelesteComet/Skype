export const MAKE_CALL = 'MAKE_CALL';

export const makeCall = (token) => {
  return $.ajax({
    url: 'api/makeCall',
    data: token 
  })
}


