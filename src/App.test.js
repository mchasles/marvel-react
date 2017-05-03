import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import renderer from 'react-test-renderer';

jest.mock('./lib/marvelApiService');

it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders App correctly', () => {
  const app = renderer.create(
    <App />
  ).toJSON();
  expect(app).toMatchSnapshot();
});