import React from 'react';
import renderer from 'react-test-renderer';
import CarItem from './CarItem';

test('renders correctly', () => {
  const props = {
    data: {
      address: 'test',
      coordinates: [41, 41, 0],
      engineType: 'test',
      exterior: 'test',
      fuel: 32,
      interior: 'test',
      name: 'test',
      vin: 'test',
      id: 12345,
    },
  };

  const component = renderer.create(<CarItem {...props} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
