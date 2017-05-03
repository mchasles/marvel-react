import React from 'react';
import ReactDOM from 'react-dom';
import {ReactLogoLoader} from './ReactLogoLoader';

import renderer from 'react-test-renderer';

it('renders ReactLogoLoader without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactLogoLoader />, div);
});

it('renders ReactLogoLoader correctly when there is no character prop set', () => {
  const list = renderer.create(<ReactLogoLoader />).toJSON();
  expect(list).toMatchSnapshot();
});
