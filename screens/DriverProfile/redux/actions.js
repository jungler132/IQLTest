import {constants} from './constants';

export const setDriversProfileData = data => ({
  type: constants.SET_DRIVER_PROFILE_DATA,
  payload: data,
});
