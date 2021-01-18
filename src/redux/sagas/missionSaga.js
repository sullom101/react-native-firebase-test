import {
  fetchMissionFailure,
  fetchMissionSuccess,
} from '../actions/missionAction';
import fetchLauncheApi from '../../lib/fetchLauncheApi';
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';

function* fetchMission(action) {
  console.log('This is inside sagas', action.payload);
  try {
    const data = yield call(fetchLauncheApi.fetchMission, action.payload);
    // console.log('*****SAGA******', data);R
    // data.isfetched = true;
    yield put(fetchMissionSuccess(data));
  } catch (e) {
    console.log('############SAGA ERROR############', e);
    yield put(fetchMissionFailure(e.message));
  }
}

export default function* root() {
  yield takeEvery('FETCH_MISSION', fetchMission);
}
