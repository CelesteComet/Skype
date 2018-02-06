export const fetchAllFriends = () => {
  return $.ajax({
    url: 'api/friendships'
  })
};


