import {constants} from './constants';

export const setDriversForMainScreen = data => ({
  type: constants.SET_MAIN_SCREEN_DRIVERS,
  payload: data,
});
