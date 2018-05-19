import React from 'react';
import { shallow } from 'enzyme';
import { Map, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import MapWrapper from './MapWrapper';
import MapMarker from './MapMarker';

const markers = [
  {
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
  {
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
];

describe('MapWrapper component', () => {
  it('renders a Map Leaflet component', () => {
    const wrapper = shallow(<MapWrapper data={markers} />);
    expect(wrapper.find(Map).exists()).toBeTruthy();
  });

  it('renders a TileLayer Leaflet component', () => {
    const wrapper = shallow(<MapWrapper data={markers} />);
    expect(wrapper.find(TileLayer).exists()).toBeTruthy();
  });

  it('renders a couple of MapMarker components', () => {
    const wrapper = shallow(<MapWrapper data={markers} />);
    expect(wrapper.find(MapMarker).length).toBeGreaterThanOrEqual(markers.length);
  });

  it('renders a MarkerClusterGroup Leaflet component', () => {
    const wrapper = shallow(<MapWrapper data={markers} />);
    expect(wrapper.find(MarkerClusterGroup).exists()).toBeTruthy();
  });
});
