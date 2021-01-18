export const fetchMissionSuccess = (payload) => ({
  type: 'FETCH_USER_SUCCESS',
  payload,
});

export const fetchMissionFailure = (payload) => ({
  type: 'FETCH_USER_FAILURE',
  payload,
});

export const fetchMission = (payload) => ({
  type: 'FETCH_USER',
  payload,
});
