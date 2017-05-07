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

it('renders MarvelCharactersList correctly displaying characters list loader', () => {
  const props = {
    error: false,
    loading: true,
    characters: null
  };
  const listLoading = renderer.create(React.createElement(MarvelCharactersList, props));
  expect(listLoading.toJSON()).toMatchSnapshot();
});

it('renders MarvelCharactersList correctly when characters are loaded', () => {
  const props = {
    error: false,
    loading: false,
    characters
  };
  const listLoaded = renderer.create(React.createElement(MarvelCharactersList, props));
  // TODO: check if there is a way to rend NavLink in snapshot
  expect(listLoaded.toJSON()).toMatchSnapshot();
});

it('renders MarvelCharactersList when error message when API does not respond', () => {
  const props = {
    error: true,
    loading: false,
    characters: null
  };
  const listLoadingFailed = renderer.create(React.createElement(MarvelCharactersList, props));
  expect(listLoadingFailed.toJSON()).toMatchSnapshot();
});