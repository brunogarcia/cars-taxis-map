import React from 'react';
import renderer from 'react-test-renderer';
import CarList from './CarList';

test('renders correctly', () => {
  const props = {
    data: [
      {
        address: 'test 1',
        coordinates: [24, 81, 0],
        engineType: 'test',
        exterior: 'test',
        fuel: 99,
        interior: 'test',
        name: 'test',
        vin: 'test',
        id: 12345,
      },
      {
        address: 'test 2',
        coordinates: [41, 41, 0],
        engineType: 'test',
        exterior: 'test',
        fuel: 32,
        interior: 'test',
        name: 'test',
        vin: 'test',
        id: 56789,
      },
    ],
  };

  const component = renderer.create(<CarList {...props} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
