import React from 'react';
import renderer from 'react-test-renderer';
import TaxiList from './TaxiList';

test('renders correctly', () => {
  const props = {
    data: [
      {
        id: 12345,
        coordinate: {
          latitude: 41,
          longitude: 52,
        },
        state: 'test',
        type: 'test',
      },
      {
        id: 56789,
        coordinate: {
          latitude: 33,
          longitude: 82,
        },
        state: 'test',
        type: 'test',
      },
    ],
  };

  const component = renderer.create(<TaxiList {...props} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
