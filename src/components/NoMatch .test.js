import React from 'react';
import renderer from 'react-test-renderer';
import NoMatch from './NoMatch';

test('renders correctly', () => {
  const props = {
    history: {
      push: () => {},
    },
    location: {
      pathname: '/path/to/somewhere',
    },
  };

  const component = renderer.create(<NoMatch {...props} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
