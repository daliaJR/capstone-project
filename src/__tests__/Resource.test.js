import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Resource from '../pages/Resource';

it('Blog Page renders correctly', () => {
  const tree = renderer.create(<Resource />).toJSON();
  expect(tree).toMatchSnapshot();
});
