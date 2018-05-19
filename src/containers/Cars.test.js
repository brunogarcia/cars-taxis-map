import React from 'react';
import { shallow } from 'enzyme';
import Cars from './Cars';
import Loading from '../components/Loading';
import Error from '../components/Error';
import CarList from '../components/CarList';

const cars = [
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
];

describe('Cars component', () => {
  it('renders differently with default state', () => {
    const wrapper = shallow(<Cars />);
    expect(wrapper.find(Loading).exists()).toBeTruthy();
  });

  it('renders differently with some error', () => {
    const wrapper = shallow(<Cars />);
    wrapper.setState({ loading: false, error: true, cars: [] });
    expect(wrapper.find(Error).exists()).toBeTruthy();
  });

  it('renders differently with cars', () => {
    const wrapper = shallow(<Cars />);
    wrapper.setState({ loading: false, error: false, cars });
    expect(wrapper.find(CarList).exists()).toBeTruthy();
  });

  it('should call getVehicles when the component did mount', () => {
    const getVehiclesMocked = jest.spyOn(Cars.prototype, 'getVehicles');
    shallow(<Cars />);
    expect(getVehiclesMocked).toHaveBeenCalledTimes(1);
    getVehiclesMocked.mockClear();
  });
});
