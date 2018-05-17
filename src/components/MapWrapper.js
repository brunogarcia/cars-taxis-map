import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import MapMarker from './MapMarker';
import Types from '../utils/types';

const map = {
  lat: 53.5511,
  lng: 9.9937,
  zoom: 13,
  maxZoom: 18,
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution: '&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors',
};

const position = [map.lat, map.lng];

const renderMapMarkers = vehicles =>
  vehicles.map(vehicle => <MapMarker key={vehicle.id} data={vehicle} />);

const MapWrapper = (props) => {
  const { cars, taxis } = props.data;

  return (
    <Map center={position} zoom={map.zoom} maxZoom={map.maxZoom}>
      <TileLayer
        url={map.url}
        attribution={map.attribution}
      />
      <MarkerClusterGroup>
        {renderMapMarkers(cars)}
        {renderMapMarkers(taxis)}
      </MarkerClusterGroup>
    </Map>
  );
};

MapWrapper.propTypes = {
  data: PropTypes.shape({
    cars: PropTypes.arrayOf(Types.marker.isRequired).isRequired,
    taxis: PropTypes.arrayOf(Types.marker.isRequired).isRequired,
  }).isRequired,
};

export default MapWrapper;
