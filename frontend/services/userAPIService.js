export const createUser = (user) => {
  console.log(user)
  return $.ajax({
    url: 'api/users',
    method: 'POST',
    data: { user }
  })
};

