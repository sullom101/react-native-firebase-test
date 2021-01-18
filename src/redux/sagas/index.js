import {all} from 'redux-saga/effects';
import launch from './launcheSaga';
import mission from './missionSaga';
import launcheStatus from './launchStatusSagas';
export default function* root() {
  yield all([launch(), mission(), launcheStatus()]);
}
