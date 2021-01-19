export const fetchUserSuccess = (payload) => ({
  type: 'FETCH_USER_SUCCESS',
  payload,
});

export const fetchUserFailure = (payload) => ({
  type: 'FETCH_USER_FAILURE',
  payload,
});

export const fetchUser = (payload) => ({
  type: 'FETCH_USER',
  payload,
});
