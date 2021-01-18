export const fetchLauncheSuccess = (payload) => ({
  type: 'FETCH_SUCCESS',
  payload,
});

export const fetchLauncheFailure = (payload) => ({
  type: 'FETCH_FAILURE',
  payload,
});

export const fetchLaunche = (payload) => ({
  type: 'FETCH',
  payload,
});
