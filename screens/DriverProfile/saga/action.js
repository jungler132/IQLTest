export const constants = {
  DRIVER_PROFILE_WATCHER: 'DRIVER_PROFILE_WATCHER',
};

export const getDriverProfileData = arg => ({
  type: constants.DRIVER_PROFILE_WATCHER,
  arg,
});
