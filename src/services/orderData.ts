import { getLocalString, getLocalTime } from 'utils/getLocalTime';

export const orderData = (data: { [key: string]: any }) => ({
  id: data.id,
  coord: data.coord,
  description: data.weather[0].description,
  icon: data.weather[0].icon,
  temp: data.main.temp,
  humidity: data.main.humidity,
  tempMin: data.main.temp_min,
  tempMax: data.main.temp_max,
  visibility: data.visibility,
  wind: data.wind,
  country: data.sys.country || 'unknown',
  sunrise: getLocalTime(data.sys.sunrise, data.timezone),
  sunset: getLocalTime(data.sys.sunset, data.timezone),
  city: data.name || data.base || 'unknown',
  dt: getLocalString(data.dt, data.timezone),
});
