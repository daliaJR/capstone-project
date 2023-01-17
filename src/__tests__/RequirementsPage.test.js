import * as React from 'react';
import * as renderer from 'react-test-renderer';
import RequirementsPage from '../pages/RequirementsPage'

it('Requirement Page renders correctly', () => {
  const tree = renderer.create(<RequirementsPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
