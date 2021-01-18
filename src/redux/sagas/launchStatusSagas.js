import {
  fetchLaunchStatusSuccess,
  fetchLaunchStatusFailure,
} from '../actions/launchStatusAction';
import fetchLauncheApi from '../../lib/fetchLauncheApi';
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';

function* fetchMission(action) {
  console.log('This is inside sagas', action.payload);
  try {
    const data = yield call(fetchLauncheApi.fetchLaunchStatus, action.payload);
    // console.log('*****SAGA******', data);R
    // data.isfetched = true;
    yield put(fetchLaunchStatusSuccess(data));
  } catch (e) {
    console.log('############SAGA ERROR############', e);
    yield put(fetchLaunchStatusFailure(e.message));
  }
}

export default function* root() {
  yield takeEvery('FETCH_LAUNCH_STATUS', fetchMission);
}
