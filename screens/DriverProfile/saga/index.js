import {takeEvery, put, call} from 'redux-saga/effects';
import {doRequestProfile} from '../../../services/api/doRequestProfile';
import {setDriversProfileData} from '../redux/actions';
import {constants} from './action';

function* workerDriverProfile(args) {
  const driverProfile = yield call(() => doRequestProfile(args));
  yield put(setDriversProfileData(driverProfile));
}

export function* watcherDriverProfile() {
  yield takeEvery(constants.DRIVER_PROFILE_WATCHER, workerDriverProfile);
}
