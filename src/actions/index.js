import axios from 'axios';

const API_KEY = 'a4c45179a05dc81cb28d4608b3593018';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // const request is axios returning a promise
  // a promise doesnt actually contain any of our data
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    // this payload key is returning the promise
    // from const request above
    payload: request
    // redux-promise will unwrap the payload for us and
    // return data 
  };
}
