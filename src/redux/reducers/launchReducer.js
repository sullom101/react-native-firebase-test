const initialState = {
  launches: [],
  total: 0,
  offset: 0,
  count: 0,
};

export default function launcheReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        launches: [...action.payload.launches],
        total: action.payload.total,
        offset: action.payload.offset,
        count: action.payload.count,
      };
    case 'FETCH_FAILURE':
      // console.log('****LAUNCHES  FAILURE Reducer ****', state);
      return state;
    case 'FETCH_REQUEST':
      // console.log('****LAUNCHES  FAILURE Reducer ****', state);
      return {...state, offset: action.payload};
    default:
      // console.log('**** default LAUNCHR Reducer ****', state);
      return state;
  }
}
