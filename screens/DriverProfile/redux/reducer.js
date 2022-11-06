import {constants} from './constants';

const initialState = {
  driverProfile: {},
};

export const reducerDriverProfile = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_DRIVER_PROFILE_DATA:
      return {
        ...state,
        driverProfile: action.payload,
      };
    default:
      return state;
  }
};
