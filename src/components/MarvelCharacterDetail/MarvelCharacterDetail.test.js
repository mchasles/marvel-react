import React from 'react';
import ReactDOM from 'react-dom';
import {MarvelCharacterDetail} from './MarvelCharacterDetail';

import renderer from 'react-test-renderer';
jest.mock('../../lib/marvelApiService');
import {characters} from '../../lib/marvelApiService';


it('renders MarvelCharacterDetail without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MarvelCharacterDetail character={characters[0]}/>, div);
});

it('renders MarvelCharacterDetail correctly when there is no character prop set', () => {
  const list = renderer.create(<MarvelCharacterDetail />).toJSON();
  expect(list).toMatchSnapshot();
});

it('renders MarvelCharacterDetail correctly when there is one character prop set', () => {
  const listWithCharacters = renderer.create(<MarvelCharacterDetail character={characters[0]}/>);
  listWithCharacters.getInstance().setState({ character: characters[0] });
  expect(listWithCharacters.toJSON()).toMatchSnapshot();
});