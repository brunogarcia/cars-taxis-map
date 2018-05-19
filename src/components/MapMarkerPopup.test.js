import React from 'react';
import { shallow } from 'enzyme';
import { Popup } from 'react-leaflet';
import MapMarkerPopup from './MapMarkerPopup';

const marker = {
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
};

describe('MapWrapper component', () => {
  it('renders a Popup Leaflet component', () => {
    const wrapper = shallow(<MapMarkerPopup data={marker} />);
    expect(wrapper.find(Popup).exists()).toBeTruthy();
  });
});
