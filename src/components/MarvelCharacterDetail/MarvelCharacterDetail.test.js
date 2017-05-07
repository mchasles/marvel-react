import React from 'react';
import ReactDOM from 'react-dom';
import {MarvelCharacterDetail} from './MarvelCharacterDetail';

import renderer from 'react-test-renderer';
jest.mock('../../lib/marvelApiService');
import {characters} from '../../lib/marvelApiService';

jest.mock('../../lib/utils');

const propsCharacter1 = {
  character: characters[0],
  match: {
    params: {id: '1'}
  }
};

const propsCharacter2 = {
  character: characters[1],
  match: {
    params: {id: '2'}
  }
};

it('renders MarvelCharacterDetail without crashing and display loader', () => {
  const loaderRendering = renderer.create(React.createElement(MarvelCharacterDetail, propsCharacter1));
  expect(loaderRendering.toJSON()).toMatchSnapshot();
});

it('renders MarvelCharacterDetail correctly when there is one character selected and fetching done', (done) => {
  const characterWithPortrait = renderer.create(React.createElement(MarvelCharacterDetail, propsCharacter2));
  // Trigger componentWillReceiveProps as if route changed successfully and props changed
  characterWithPortrait.getInstance().componentWillReceiveProps(propsCharacter1)
    .then(() => {
      expect(characterWithPortrait.toJSON()).toMatchSnapshot();
      done();
    });
});

it('renders MarvelCharacterDetail with error img if character portrait failed to load', (done) => {
  const characterWithNoPortrait = renderer.create(React.createElement(MarvelCharacterDetail, propsCharacter1));
  // Trigger componentWillReceiveProps as if route changed successfully and props changed
  characterWithNoPortrait.getInstance().componentWillReceiveProps(propsCharacter2)
    .then(() => {
      expect(characterWithNoPortrait.toJSON()).toMatchSnapshot();
      done();
    });
});