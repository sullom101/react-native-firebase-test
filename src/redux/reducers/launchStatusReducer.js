const initialState = {
  launchStatus: {},
};

export default function launchStatusReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_LAUNCH_STATUS_SUCCESS':
      console.log('**** LAUNCHES SUCCESS Reducer ****', action.payload, state);
      return {...state, launchStatus: action.payload};
    case 'FETCH_LAUNCH_STATUS_FAILURE':
      // console.log('****LAUNCHES  FAILURE Reducer ****', state);
      return state;
    default:
      // console.log('**** default LAUNCHR Reducer ****', state);
      return state;
  }
}
