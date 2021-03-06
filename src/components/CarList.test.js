import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CarList from './CarList';
import CarItem from './CarItem';

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

test('renders correctly', () => {
  const component = renderer.create(<CarList {...props} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a couple of CarItem components', () => {
  const wrapper = shallow(<CarList {...props} />);
  expect(wrapper.find(CarItem).length).toBeGreaterThanOrEqual(props.data.length);
});

