# Weather React App

Weather App fetches weather params from the api and displays data

## Brief

Weather App fetches weather params from the api and displays data

- used 2 weather api

1.  first load will fetch weather data with random lat long
2.  form fetches with city and country

- form with city and country fetches data and displays in the grid
- caches the data in the store for a form search
- error state when no city/country detail is found

## Tech Stack

- React (UI Library)
- Zustand (State management)
- Typescript (Language)
- Styled Compoents (Styling)
- Jest (Test runner)
- React Testing Library (Testing)
- jest-fetch-mock (for async fetch mocking behavior)

## How to run

yarn install;
yarn build;
yarn start;

## Tests

yarn test

## further improvements

- use selectbox for country city
- missing loading state
- test case for cached data
- better usage/display of data from api(currently only 2 being used)
