const initialState = {
  saved: [],
};

export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_LIKE':
      console.log('****ADD LIKES  ****', state.saved);
      return {...state, saved: [...state.saved, action.payload]};
    case 'REMOVE_LIKE':
      const removedItem = removeItem(state.saved, action.payload);
      return {...state, saved: [...removedItem]};
    default:
      // console.log('**** default LAUNCHR Reducer ****', state);
      return state;
  }
}

const removeItem = (array, id) => {
  const newArray = array.filter((element) => {
    return element !== id;
  });
  return newArray;
};
