import React from 'react';
import renderer from 'react-test-renderer';
import TaxiState from './TaxiState';

test('renders correctly', () => {
  const props = {
    state: 'test',
  };

  const component = renderer.create(<TaxiState {...props} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
