const initialState = {
  user: {},
  isAuth: false,
};

export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER':
      // console.log('****LAUNCHES  FAILURE Reducer ****', state);
      return {...state, user: action.payload, isAuth: true};
    default:
      // console.log('**** default LAUNCHR Reducer ****', state);
      return state;
  }
}
