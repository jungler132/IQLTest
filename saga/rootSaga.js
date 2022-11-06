import {spawn} from 'redux-saga/effects';
import {watcherDriverProfile} from '../screens/DriverProfile/saga';
import {watcherMainScreen} from '../screens/MainScreen/saga';

export default function* rootSaga() {
  yield spawn(watcherMainScreen);
  yield spawn(watcherDriverProfile);
}
