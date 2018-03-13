export const createUser = (user) => {
  return $.ajax({
    url: 'api/users',
    method: 'POST',
    data: { user }
  })
};

