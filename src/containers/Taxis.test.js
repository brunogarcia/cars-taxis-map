import React from 'react';
import { shallow } from 'enzyme';
import Taxis from './Taxis';
import Loading from '../components/Loading';
import Error from '../components/Error';
import TaxiList from '../components/TaxiList';

const taxis = [
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
];

describe('Cars component', () => {
  it('renders differently with default state', () => {
    const wrapper = shallow(<Taxis />);
    expect(wrapper.find(Loading).exists()).toBeTruthy();
  });

  it('renders differently with some error', () => {
    const wrapper = shallow(<Taxis />);
    wrapper.setState({ loading: false, error: true, taxis: [] });
    expect(wrapper.find(Error).exists()).toBeTruthy();
  });

  it('renders differently with taxis', () => {
    const wrapper = shallow(<Taxis />);
    wrapper.setState({ loading: false, error: false, taxis });
    expect(wrapper.find(TaxiList).exists()).toBeTruthy();
  });

  it('should call getVehicles when the component did mount', () => {
    const getVehiclesMocked = jest.spyOn(Taxis.prototype, 'getVehicles');
    shallow(<Taxis />);
    expect(getVehiclesMocked).toHaveBeenCalledTimes(1);
    getVehiclesMocked.mockClear();
  });
});
