export interface Weather {
  id: number;
  coord: Coordinates;
  description: string;
  icon: string;
  temp: number;
  humidity: number;
  tempMin: number;
  tempMax: number;
  visibility: number;
  wind: Wind;
  country: string;
  sunrise: string;
  sunset: string;
  city: string;
  dt: string;
}

export type Coordinates = {
  lon: number;
  lat: number;
};
export type Wind = {
  speed: number;
  deg: number;
};

export interface Store {
  lon: number;
  lat: number;
  weatherData: Weather[];
  weatherIds: number[];
  currentWeather: Weather;
  error?: string;
  addWeatherData: (weather: Weather) => void;
  fetchCurrentWeather: fetchWeather;
  setCurrentWeather: (weather: Weather) => void;
}

export type fetchWeather = (data: {
  lat?: number;
  long?: number;
  city?: string;
  country?: string;
}) => void;

export interface Form {
  city: string;
  country: string;
}

export enum Lat {
  MIN = -90,
  MAX = 90,
}

export enum Lon {
  MIN = -180,
  MAX = 180,
}

export interface FetchData {
  lat?: number;
  long?: number;
  city?: string;
  country?: string;
}
