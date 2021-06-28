import styled from 'styled-components';
import { useStore } from 'store/store';
import { Weather } from 'store/weather.types';
import { IMG_SRC } from 'utils/constants';
import { Styler } from 'assets/styles/Styled';
import Sunrise from 'assets/images/sunrise.png';
import Sunset from 'assets/images/sunset.png';
import Visibility from 'assets/images/visibility.png';
import ArrowDown from 'assets/images/arrow-down.png';
import Humidity from 'assets/images/humidity.png';
import Wind from 'assets/images/wind.png';
import WindDeg from 'assets/images/wind.png';

function WeatherCard() {
  const currentWeather: Weather = useStore<Weather>(
    (state) => state.currentWeather
  );

  const [date, time] = currentWeather.dt.split(',');

  return (
    <Styled.Card>
      <Styler.FlexSpace>
        <Styled.Normal>{date}</Styled.Normal>
        <Styled.Normal>{time}</Styled.Normal>
      </Styler.FlexSpace>
      <Styler.FlexSpace>
        {currentWeather.icon && (
          <img
            src={`${IMG_SRC}${currentWeather.icon}@2x.png`}
            width={100}
            height={100}
            alt="weather"
          />
        )}
        <Styler.FlexCol>
          <Styled.Big>{currentWeather.country}</Styled.Big>
          <Styled.Small>{currentWeather.city}</Styled.Small>
        </Styler.FlexCol>
      </Styler.FlexSpace>
      <Styled.Big>{`${currentWeather?.tempMax}`}&#8451;</Styled.Big>

      <Styler.FlexSpace>
        <Styler.FlexCol>
          <img
            src={Sunrise}
            width={18}
            height={18}
            alt="sunrise"
            title="sunrise"
          />
          <Styled.Small>{currentWeather?.sunrise}</Styled.Small>
        </Styler.FlexCol>
        <Styler.FlexCol>
          <img
            src={Sunset}
            width={18}
            height={18}
            alt="sunset"
            title="sunset"
          />
          <Styled.Small>{currentWeather?.sunset}</Styled.Small>
        </Styler.FlexCol>
      </Styler.FlexSpace>
      <Styler.FlexSpace>
        <Styler.FlexCol>
          <img
            src={ArrowDown}
            width={18}
            height={18}
            alt="tempMin"
            title="temp min"
          />
          <Styled.Small>{currentWeather?.tempMin}&#8451;</Styled.Small>
        </Styler.FlexCol>
        <Styler.FlexCol>
          <Styled.Rotated
            src={ArrowDown}
            width={18}
            height={18}
            alt="tempMax"
            title="temp max"
          />
          <Styled.Small>{currentWeather?.tempMax}&#8451;</Styled.Small>
        </Styler.FlexCol>
      </Styler.FlexSpace>
      <Styler.FlexSpace>
        <Styler.FlexCol>
          <img
            src={Visibility}
            width={18}
            height={18}
            alt="visibility"
            title="visibility"
          />
          <Styled.Small>{currentWeather?.visibility}</Styled.Small>
        </Styler.FlexCol>
        <Styler.FlexCol>
          <img
            src={Humidity}
            width={18}
            height={18}
            alt="humidity"
            title="humidity"
          />
          <Styled.Small>{currentWeather?.humidity}</Styled.Small>
        </Styler.FlexCol>
      </Styler.FlexSpace>
      <Styler.FlexSpace>
        <Styler.FlexCol>
          <img
            src={Wind}
            width={18}
            height={18}
            alt="windSpeed"
            title="wind speed"
          />
          <Styled.Small>{currentWeather.wind?.speed}</Styled.Small>
        </Styler.FlexCol>
        <Styler.FlexCol>
          <Styled.Rotated
            src={WindDeg}
            width={18}
            height={18}
            alt="windDeg"
            title="wind degree"
          />
          <Styled.Small>{currentWeather.wind?.deg}</Styled.Small>
        </Styler.FlexCol>
      </Styler.FlexSpace>
      <Styled.Tiny>{currentWeather.description}</Styled.Tiny>
    </Styled.Card>
  );
}

const Styled = {
  Rotated: styled.img`
    transform: rotate(180deg);
  `,
  Tiny: styled.span`
    font-size: 12px;
    font-weight: bold;
    margin: ${(props) => props.theme.spacings.l} 0;
  `,
  Small: styled.span`
    font-size: 14px;
    font-weight: bold;
    margin: 0 0 ${(props) => props.theme.spacings.m};
  `,
  Big: styled.span`
    font-size: 24px;
    font-weight: bold;
    margin: ${(props) => props.theme.spacings.m} 0;
  `,
  Normal: styled.span`
    font-size: 18px;
    font-weight: bold;
    margin: ${(props) => props.theme.spacings.m} 0;
  `,
  Card: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 20px;
    width: 300px;
    box-shadow: 0 3px 36px 0 rgba(0, 0, 0, 0.16);
    background-color: ${(props) => props.theme.colors.black4};
    border: 1px solid ${(props) => props.theme.colors.black5};
    margin: ${(props) => props.theme.spacings.xl} auto 0;
    padding: ${(props) => props.theme.spacings.l};
    background-image: linear-gradient(
      ${(props) => `${props.theme.colors.blue1}, ${props.theme.colors.blue2}`}
    );
  `,
};

export default WeatherCard;
