export const createMessage = message => {
  return $.ajax({
    url: 'api/messages',
    method: 'POST',
    data: { message }
  })
};

export const fetchAllMessages = () => {
  return $.ajax({
    url: 'api/messages'
  })
}

export const fetchRoomMessages = (roomId) => {
  return $.ajax({
    url: `api/messages/${roomId}`
  })
}


