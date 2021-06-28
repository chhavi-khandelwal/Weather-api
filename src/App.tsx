import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import WeatherDisplay from './containers/WeatherDisplay';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <WeatherDisplay />
    </ThemeProvider>
  );
}

export default App;
