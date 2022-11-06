import axios from 'axios';

export const doRequestProfile = async args => {
  const {driverId, year} = args.arg;
  try {
    if (year > 0 && year < 2022) {
      const response = await axios.get(
        `http://ergast.com/api/f1/${year}/drivers/${driverId}/results.json`,
      );
      console.log(
        'response in profile driver --->',
        response.data.MRData?.RaceTable?.Races,
      );
      if (response.data.MRData?.RaceTable?.Races.length) {
        return response.data.MRData?.RaceTable?.Races;
      } else {
        return 'No races, Check Wiki!';
      }
    } else {
      return 'Wrong DATA!!! Try Again!';
    }
  } catch (e) {
    console.log(e);
  }
};
