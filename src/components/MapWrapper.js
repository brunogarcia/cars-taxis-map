import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer } from 'react-leaflet';
import MapMarker from './MapMarker';
import Types from '../types';
import markerBuilder from '../utils/markerBuilder';

const map = {
  lat: 53.5511,
  lng: 9.9937,
  zoom: 13,
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution: '&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors',
};

const position = [map.lat, map.lng];

const renderMapMarkers = vehicles =>
  vehicles.map(vehicle => <MapMarker key={vehicle.id} data={vehicle} />);

const MapWrapper = (props) => {
  const { cars, taxis } = props.data;
  const carMarkerObjects = markerBuilder.getMarker(cars);
  const taxiMarkerObjects = markerBuilder.getMarker(taxis);

  return (
    <Map center={position} zoom={map.zoom}>
      <TileLayer
        url={map.url}
        attribution={map.attribution}
      />
      {renderMapMarkers(carMarkerObjects)}
      {renderMapMarkers(taxiMarkerObjects)}
    </Map>
  );
};

MapWrapper.propTypes = {
  data: PropTypes.shape({
    cars: PropTypes.arrayOf(Types.car.isRequired).isRequired,
    taxis: PropTypes.arrayOf(Types.taxi.isRequired).isRequired,
  }).isRequired,
};

export default MapWrapper;
