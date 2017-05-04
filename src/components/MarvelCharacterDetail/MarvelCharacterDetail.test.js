import React from 'react';
import ReactDOM from 'react-dom';
import {MarvelCharacterDetail} from './MarvelCharacterDetail';

import renderer from 'react-test-renderer';
jest.mock('../../lib/marvelApiService');
import {characters} from '../../lib/marvelApiService';

jest.mock('../../lib/utils');

const props = {
  character: characters[0],
  match: {
    params: {id: '1'}
  }
};

const propsError = {
  character: characters[1],
  match: {
    params: {id: '2'}
  }
};

it('renders MarvelCharacterDetail without crashing and display loader', () => {
  const loaderRendering = renderer.create(React.createElement(MarvelCharacterDetail, props));
  expect(loaderRendering.toJSON()).toMatchSnapshot();
});

it('renders MarvelCharacterDetail correctly when there is one character selected and fetching done', (done) => {
  const characterWithPortrait = renderer.create(React.createElement(MarvelCharacterDetail, props));
  // Trigger componentWillReceiveProps as if route changed successfully and props changed
  characterWithPortrait.getInstance().componentWillReceiveProps(props)
    .then(() => {
      expect(characterWithPortrait.toJSON()).toMatchSnapshot();
      done();
    });
});

it('renders MarvelCharacterDetail with error img if character portrait failed to load', (done) => {
  const characterWithNoPortrait = renderer.create(React.createElement(MarvelCharacterDetail, propsError));
  // Trigger componentWillReceiveProps as if route changed successfully and props changed
  characterWithNoPortrait.getInstance().componentWillReceiveProps(propsError)
    .then(() => {
      expect(characterWithNoPortrait.toJSON()).toMatchSnapshot();
      done();
    });
});