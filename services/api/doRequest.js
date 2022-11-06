import axios from 'axios';

export const doRequest = async page => {
  try {
    if (page) {
      const response = await axios.get(
        `http://ergast.com/api/f1/drivers.json?limit=10&offset=${page * 10}`,
      );
      return response.data.MRData.DriverTable;
    } else {
      const response = await axios.get(
        `http://ergast.com/api/f1/drivers.json?limit=10&offset=0`,
      );
      return response.data.MRData.DriverTable;
    }
  } catch {
    console.log('ERROR WITH GETTING DATA');
  }
};
