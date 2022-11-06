import {combineReducers} from 'redux';

import {reducerMainScreen} from '../../screens/MainScreen/redux/reducer';
import {reducerDriverProfile} from '../../screens/DriverProfile/redux/reducer';

export const rootReducer = combineReducers({
  reducerMainScreen,
  reducerDriverProfile,
});
