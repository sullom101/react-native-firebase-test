export const fetchLauncheSuccess = (FETCH_SUCCESS, payload) => {
  action(FETCH_SUCCESS, payload);
};

export const fetchLauncheFailure = (FETCH_FAILURE, payload) => {
  action(FETCH_FAILURE, payload);
};

export const fetchLaunche = () => action(FETCH);
