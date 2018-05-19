import React from 'react';
import { shallow } from 'enzyme';
import { Marker } from 'react-leaflet';
import MapMarker from './MapMarker';
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
  it('renders a Marker Leaflet component', () => {
    const wrapper = shallow(<MapMarker data={marker} />);
    expect(wrapper.find(Marker).exists()).toBeTruthy();
  });

  it('renders a MapMarkerPopup component', () => {
    const wrapper = shallow(<MapMarker data={marker} />);
    expect(wrapper.find(MapMarkerPopup).exists()).toBeTruthy();
  });
});
