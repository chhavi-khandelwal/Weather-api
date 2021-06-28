import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach(function () {
  (fetch as any).resetMocks();
  (fetch as any).dontMock();
});

describe('Weather', () => {
  test('Should send a lat long request', async () => {
    (fetch as any).mockResponseOnce(JSON.stringify({}));
    render(<App />);

    await waitFor(async () => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  test('should be for lat long', async () => {
    (fetch as any).mockResponseOnce(JSON.stringify({}));
    render(<App />);
    const url = expect.stringMatching(
      /^https:\/\/api.openweathermap.org\/data\/2.5\/weather\?lat=\d+&lon=\d+&units=metric&appid=45cc08908db4b4ebcc61dee66f797c6a/
    );
    await waitFor(async () => {
      expect(fetch).toHaveBeenCalledWith(url);
    });
  });
});
