import React from 'react';
import renderer from 'react-test-renderer';
import TaxiItem from './TaxiItem';

test('renders correctly', () => {
  const props = {
    data: {
      id: 12345,
      coordinate: {
        latitude: 41,
        longitude: 52,
      },
      state: 'test',
      type: 'test',
    },
  };

  const component = renderer.create(<TaxiItem {...props} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
