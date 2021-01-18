import {all} from 'redux-saga/effects';
import launch from './launcheSaga';
export default function* root() {
  yield all([launch()]);
}
