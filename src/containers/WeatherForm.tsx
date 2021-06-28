import styled from 'styled-components';
import { useStore } from 'store/store';
import { fetchWeather, Form } from 'store/weather.types';
import { useForm } from 'react-hook-form';
import Input from 'components/Input/Input';

function WeatherForm() {
  const setCurrentWeather = useStore((state) => state.setCurrentWeather);
  const weatherData = useStore((state) => state.weatherData);
  const setError = useStore((state) => state.setError);

  const fetchCurrentWeather = useStore<fetchWeather>(
    (state) => state.fetchCurrentWeather
  );
  const { register, handleSubmit, errors, reset } = useForm<Form>({
    defaultValues: {},
  });

  const onUpdateName = async (data: Form) => {
    const filteredWeather = weatherData.find(
      (wD) =>
        wD.city.toLowerCase() === data.city.toLowerCase() ||
        wD.country.toLowerCase() === data.country.toLowerCase()
    );
    setError('');

    if (filteredWeather) {
      setCurrentWeather(filteredWeather);
    } else {
      await fetchCurrentWeather(data);
    }
    reset({});
  };

  return (
    <Styled.Form onSubmit={handleSubmit((data) => onUpdateName(data))}>
      <Styled.InputContainer>
        <Input
          type="text"
          placeholder="Enter city"
          name="city"
          error={errors?.city?.type ? 'Required' : ''}
          ref={register({ required: true })}
          id="test-input1"
        />
      </Styled.InputContainer>
      <Styled.InputContainer>
        <Input
          type="text"
          placeholder="Enter country"
          name="country"
          error={errors?.country?.type ? 'Required' : ''}
          ref={register({ required: true })}
          id="test-input2"
        />
      </Styled.InputContainer>
      <Styled.Button type="submit" data-testid="submit-btn">
        Submit
      </Styled.Button>
    </Styled.Form>
  );
}

const Styled = {
  InputContainer: styled.div`
    margin: ${(props) => `${props.theme.spacings.s} ${props.theme.spacings.l}`};
  `,
  Button: styled.button`
    width: 80px;
    height: 32px;
    background-color: ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors.white};
    border-radius: 4px;
    border: none;
  `,
  Form: styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${(props) => props.theme.spacings.xl};
    flex-wrap: wrap;
  `,
};

export default WeatherForm;
