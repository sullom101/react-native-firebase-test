const initialState = {
  mission: {},
};

export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_MISSION_SUCCESS':
      // console.log('**** LAUNCHES SUCCESS Reducer ****', action.payload, state);
      return {...state, mission: action.payload};
    case 'FETCH_MISSION_FAILURE':
      // console.log('****LAUNCHES  FAILURE Reducer ****', state);
      return state;
    default:
      // console.log('**** default LAUNCHR Reducer ****', state);
      return state;
  }
}
