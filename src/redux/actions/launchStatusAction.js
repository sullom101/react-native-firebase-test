export const fetchLaunchStatusSuccess = (payload) => ({
  type: 'FETCH_LAUNCH_STATUS_SUCCESS',
  payload,
});

export const fetchLaunchStatusFailure = (payload) => ({
  type: 'FETCH_LAUNCH_STATUS_FAILURE',
  payload,
});

export const fetchLaunchStatus = (payload) => ({
  type: 'FETCH_LAUNCH_STATUS',
  payload,
});
