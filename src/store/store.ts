import { fetchWeather } from 'api/fetch';
import { orderData } from 'services/orderData';
import { getRandomNumber } from 'utils/getRandomNumber';
import create from 'zustand';
import { Store, Weather, Lon, Lat, FetchData } from './weather.types';

const store = (set: any) => ({
  weatherData: [],
  lon: getRandomNumber(Lon.MIN, Lon.MAX),
  lat: getRandomNumber(Lat.MIN, Lat.MAX),
  addWeatherData: (weather: Weather) =>
    set((state: Store) => {
      if (state.weatherIds.indexOf(weather.id) > 0) {
        return state.weatherData;
      } else {
        return {
          ...state.weatherData,
          weather,
        };
      }
    }),

  fetchCurrentWeather: async (data: FetchData) => {
    let response = await fetchWeather(data);
    if (response.message) {
      set({ error: response.message });
      return;
    }
    const currentWeather: Weather = orderData(response);
    set((state: Store) => ({
      currentWeather,
      weatherData: [...state.weatherData, currentWeather],
    }));
  },
  setError: (error: string) => set(() => ({ error: error })),
  setCurrentWeather: (weather: Weather) =>
    set(() => ({
      currentWeather: weather,
    })),
  currentWeather: {
    id: 0,
    coord: { lat: 0, lon: 0 },
    description: '',
    icon: '',
    temp: 0,
    pressure: 0,
    humidity: 0,
    tempMin: 0,
    tempMax: 0,
    visibility: 0,
    wind: { speed: 0, deg: 0 },
    country: '',
    sunrise: '',
    sunset: '',
    city: '',
    dt: '',
  },
  weatherIds: [],
});

export const useStore = create<Store>(store);
