import styled from 'styled-components';
import { useStore } from 'store/store';
import { fetchWeather } from 'store/weather.types';
import { useEffect } from 'react';
import WeatherCard from './WeatherCard';
import WeatherForm from './WeatherForm';

function WeatherDisplay() {
  const error = useStore((state) => state.error);
  const lon = useStore((state) => state.lon);
  const lat = useStore((state) => state.lat);
  const fetchCurrentWeather = useStore<fetchWeather>(
    (state) => state.fetchCurrentWeather
  );

  useEffect(() => {
    fetchCurrentWeather({ lat: lat, long: lon });
  }, []);

  return (
    <>
      <WeatherForm />
      {error ? (
        <Styled.Error data-testid="error">{error}</Styled.Error>
      ) : (
        <WeatherCard />
      )}
    </>
  );
}

const Styled = {
  Error: styled.span`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    font-size: 18px;
    font-weight: bold;
  `,
};

export default WeatherDisplay;
