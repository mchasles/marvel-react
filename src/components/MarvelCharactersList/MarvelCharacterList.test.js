import React from 'react';
import ReactDOM from 'react-dom';
import {MarvelCharactersList} from './MarvelCharactersList';

import renderer from 'react-test-renderer';
jest.mock('../../lib/marvelApiService');
import {characters} from '../../lib/marvelApiService';

jest.mock('react-router');

it('renders MarvelCharactersList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MarvelCharactersList characters={characters}/>, div);
});

it('renders MarvelCharactersList correctly', () => {
  const list = renderer.create(<MarvelCharactersList characters={characters}/>).toJSON();
  expect(list).toMatchSnapshot();
});