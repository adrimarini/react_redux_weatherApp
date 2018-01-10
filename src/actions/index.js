const API_KEY = 'a4c45179a05dc81cb28d4608b3593018';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  };
}
