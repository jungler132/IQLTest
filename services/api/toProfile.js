import axios from 'axios';

export const toProfileRequest = async driverId => {
  try {
    const response = await axios.get(
      `http://ergast.com/api/f1/drivers/${driverId}.json`,
    );
    return response.data.MRData.DriverTable.Drivers;
  } catch {
    console.log('ERROR WITH GETTING DATA');
  }
};
