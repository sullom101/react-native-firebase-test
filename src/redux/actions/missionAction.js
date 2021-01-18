export const fetchMissionSuccess = (payload) => ({
  type: 'FETCH_MISSION_SUCCESS',
  payload,
});

export const fetchMissionFailure = (payload) => ({
  type: 'FETCH_MISSION_FAILURE',
  payload,
});

export const fetchMission = (payload) => ({
  type: 'FETCH_MISSION',
  payload,
});
