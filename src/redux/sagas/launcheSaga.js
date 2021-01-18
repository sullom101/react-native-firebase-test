import {
  fetchLauncheSuccess,
  fetchLauncheFailure,
} from '../actions/launchAction';
import FetchLauncheApi from '../../lib/fetchLauncheApi';
import {call, put, takeEvery} from 'redux-saga/effects';
// import { AsyncStorage } from 'react-native'

function* fetchLaunche(action) {
  try {
    const data = yield call(FetchLauncheApi.fetchLaunche);
    console.log('*****SAGA******', data);
    // data.isfetched = true;
    yield put(fetchLauncheSuccess(data));
  } catch (e) {
    yield put(fetchLauncheFailure(e.message));
  }
}

export default function* root() {
  yield takeEvery('FETCH', fetchLaunche);
}

// async function storeLaunche() {
//   try {
//     const savedData = await AsyncStorage.getItem('saved');
//     if (savedData != null) {
//       console.log('saved data is already on the local storage');
//     } else {
//       const newSaved: any = [];
//       const stringfy = JSON.stringify(newSaved);
//       await AsyncStorage.setItem('saved', stringfy);
//       console.log('Saved data storage initiated', stringfy);
//     }
//   } catch (err) {
//     console.log('AsyncStorage error during series data store', err);
//   }
// }
