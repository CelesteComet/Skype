export const fetchAllFriends = () => {
  return $.ajax({
    url: 'api/friendships'
  })
};

export const findPotentialFriends = (searchTerm) => {
  return $.ajax({
    url: `api/find/${searchTerm}`,
    data: { searchTerm }
  })
}


