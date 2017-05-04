import React from 'react';
import ReactDOM from 'react-dom';
import {MarvelCharacterDetail} from './MarvelCharacterDetail';

import renderer from 'react-test-renderer';
jest.mock('../../lib/marvelApiService');
import {characters} from '../../lib/marvelApiService';

it('renders MarvelCharacterDetail without crashing', () => {
  const props = {
    character: characters[0],
    match: {
      params: {id: '1'}
    }
  };
  ReactDOM.render(React.createElement(MarvelCharacterDetail, props), document.createElement('div'));
});

it('renders MarvelCharacterDetail correctly when there is no character prop set', () => {
  const props = {
    character: null,
    match: {
      params: {id: '1'}
    }
  };
  const list = renderer.create(React.createElement(MarvelCharacterDetail, props));
  expect(list.toJSON()).toMatchSnapshot();
});

it('renders MarvelCharacterDetail correctly when there is one character prop set', () => {
  const props = {
    character: characters[0],
    match: {
      params: {id: '1'}
    }
  };
  const listWithCharacters = renderer.create(React.createElement(MarvelCharacterDetail, props));
  // TO FIX
  // This is NOT what I'd like to test... Snapshot is like the one in previous state meaning loader is displayed.
  // I'd need to trigger img.onload and figure out how having portrait img tag rendered.
  expect(listWithCharacters.toJSON()).toMatchSnapshot();
});