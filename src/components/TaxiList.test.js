import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TaxiList from './TaxiList';
import TaxiItem from './TaxiItem';

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

test('renders correctly', () => {
  const component = renderer.create(<TaxiList {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a couple of TaxiItem components', () => {
  const wrapper = shallow(<TaxiList {...props} />);
  expect(wrapper.find(TaxiItem).length).toBeGreaterThanOrEqual(props.data.length);
});
