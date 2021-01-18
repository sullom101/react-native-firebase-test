const initialState = {
  launches: {
    id: '',
    name: '',
    windowstart: '',
    missions: [],
    rocket: {
      imageSizes: [],
      imageURL: '',
    },
  },
};

// {
//   launches: Object;
//   id: String;
//   name: String;
//   windowstart:String;
//   missions:Array;
//   rocket: Object;
//   imageSizes:Number;
//   imageURL:String;
// }

export default function launcheReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      console.log('**** LAUNCHES Reducer ****', action, state);
      return {...state};
    case 'FETCH_FAILURE':
      console.log('****SERIE Reducer ****', state);
      return {...state, launches: action.payload};
    default:
      console.log('**** default SERIE Reducer ****', state);
      return state;
  }
}
