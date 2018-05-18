import React from 'react';
import renderer from 'react-test-renderer';
import Battery from './Battery';

test('renders correctly', () => {
  const props = {
    energy: 32,
  };

  const component = renderer.create(<Battery {...props} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
