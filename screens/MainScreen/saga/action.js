export const constants = {
  MAIN_SCREEN_WATCHER: 'MAIN_SCREEN_WATCHER',
};

export const getDriversMainScreen = arg => ({
  type: constants.MAIN_SCREEN_WATCHER,
  arg,
});
