import React from 'react';
import { shallow } from 'enzyme';
import Map from './Map';
import Loading from '../components/Loading';
import Error from '../components/Error';
import MapWrapper from '../components/MapWrapper';

const vehicles = {
  0: {
    id: 123,
    address: 'test',
    state: 'ACTIVE',
    type: 'TAXI',
    fuel: null,
    plate: null,
    coordinates: {
      lng: 41,
      lat: 52,
    },
  },
  1: {
    id: 456,
    address: 'test',
    state: 'ACTIVE',
    type: 'CAR',
    fuel: null,
    plate: null,
    coordinates: {
      lng: 23,
      lat: 56,
    },
  },
};

describe('Cars component', () => {
  it('renders differently with default state', () => {
    const wrapper = shallow(<Map />);
    expect(wrapper.find(Loading).exists()).toBeTruthy();
  });

  it('renders differently with some error', () => {
    const wrapper = shallow(<Map />);
    wrapper.setState({ loading: false, error: true, vehicles: {} });
    expect(wrapper.find(Error).exists()).toBeTruthy();
  });

  it('renders differently with vehicles', () => {
    const wrapper = shallow(<Map />);
    wrapper.setState({ loading: false, error: false, vehicles });
    expect(wrapper.find(MapWrapper).exists()).toBeTruthy();
  });

  it('should call getVehicles when the component did mount', () => {
    const getVehiclesMocked = jest.spyOn(Map.prototype, 'getVehicles');
    shallow(<Map />);
    expect(getVehiclesMocked).toHaveBeenCalledTimes(1);
    getVehiclesMocked.mockClear();
  });
});
