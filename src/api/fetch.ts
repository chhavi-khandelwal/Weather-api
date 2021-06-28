import { API_KEY, DOMAIN } from 'utils/constants';
import { FetchData } from 'store/weather.types';

export const fetchWeather = async ({ city, country, lat, long }: FetchData) => {
  let apiUrl;
  if (lat && long) {
    apiUrl = `${DOMAIN}?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`;
  } else if (city && country) {
    apiUrl = `${DOMAIN}?q=${city},${country}&units=metric&appid=${API_KEY}`;
  }
  if (!apiUrl) {
    return;
  }
  const response = await fetch(apiUrl);
  return await response.json();
};
