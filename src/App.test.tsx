import '@testing-library/jest-dom';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
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
    render(<App />);

    (fetch as any).mockResponseOnce(JSON.stringify({}));
    const url = expect.stringMatching(
      /^https:\/\/api.openweathermap.org\/data\/2.5\/weather\?lat=.*&lon=.*&units=metric&appid=45cc08908db4b4ebcc61dee66f797c6a/
    );

    await waitFor(async () => {
      expect(fetch).toHaveBeenCalledWith(url);
    });
  });

  test('check for form submit', async () => {
    (fetch as any).mockResponseOnce(JSON.stringify({}));
    render(<App />);
    const url = expect.stringMatching(
      /^https:\/\/api.openweathermap.org\/data\/2.5\/weather\?q=\w+,\w+&units=metric&appid=45cc08908db4b4ebcc61dee66f797c6a/
    );

    const input1 = screen.getByTestId('test-input1');
    fireEvent.change(input1, { target: { value: 'hamburg' } });
    const input2 = screen.getByTestId('test-input2');
    fireEvent.change(input2, { target: { value: 'germany' } });
    const submitBtn = screen.getByTestId('submit-btn');
    fireEvent.click(submitBtn);

    await waitFor(async () => {
      expect(fetch).toHaveBeenCalledWith(url);
    });
  });

  test('error case', async () => {
    (fetch as any).mockResponseOnce(JSON.stringify({}));
    render(<App />);
    const input1 = screen.getByTestId('test-input1');
    fireEvent.change(input1, { target: { value: 'a' } });
    const input2 = screen.getByTestId('test-input2');
    fireEvent.change(input2, { target: { value: 'a' } });
    const submitBtn = screen.getByTestId('submit-btn');
    fireEvent.click(submitBtn);

    await waitFor(async () => {
      const errorContainer = screen.getByTestId('error');
      expect(errorContainer).toBeInTheDocument();
    });
  });
});
