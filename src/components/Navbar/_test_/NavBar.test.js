import * as React from 'react';
import * as renderer from 'react-test-renderer';
import NavBar from '../NavBar';

it('NavBar renders correctly', () => {
  const tree = renderer.create(<NavBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
