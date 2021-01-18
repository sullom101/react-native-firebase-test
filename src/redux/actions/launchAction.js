export const fetchLaunchSuccess = (payload) => ({
  type: 'FETCH_SUCCESS',
  payload,
});

export const fetchLaunchFailure = (payload) => ({
  type: 'FETCH_FAILURE',
  payload,
});

export const fetchLaunch = (payload) => ({
  type: 'FETCH_REQUEST',
  payload,
});
