import {constants} from './constants';

const initialState = {
  drivers: {},
};

export const reducerMainScreen = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_MAIN_SCREEN_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
      };
    default:
      return state;
  }
};
