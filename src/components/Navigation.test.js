import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Navigation from './Navigation';

test('renders correctly', () => {
  const props = {
    history: {
      push: () => {},
    },
    location: {
      pathname: '/path/to/somewhere',
    },
  };

  const component = renderer.create(<MemoryRouter><Navigation {...props} /></MemoryRouter>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
