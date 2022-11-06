import {takeEvery, put, call} from 'redux-saga/effects';
import {doRequest} from '../../../services/api/doRequest';
import {setDriversForMainScreen} from '../redux/actions';
import {constants} from './action';

function* workerMainScreen(arg) {
  console.log('arg ----->', arg);
  const drivers = yield call(() => doRequest(arg.arg));
  yield put(setDriversForMainScreen(drivers));
}

export function* watcherMainScreen() {
  yield takeEvery(constants.MAIN_SCREEN_WATCHER, workerMainScreen);
}
