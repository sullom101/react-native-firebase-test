const initialState = {
  user: {
    isAuth: false,
  },
};

export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER_SUCCESS':
      // console.log('**** LAUNCHES SUCCESS Reducer ****', action.payload, state);
      return {...state, user: action.payload};
    case 'FETCH_USER_FAILURE':
      // console.log('****LAUNCHES  FAILURE Reducer ****', state);
      return state;
    case 'FETCH_USER':
      // console.log('****LAUNCHES  FAILURE Reducer ****', state);
      return {...state, user: action.payload, isAuth: true};
    default:
      // console.log('**** default LAUNCHR Reducer ****', state);
      return state;
  }
}
