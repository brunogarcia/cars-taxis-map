import React from 'react';
import PropTypes from 'prop-types';
import { Marker, Popup } from 'react-leaflet';
import MapMarkerIcon from './MapMarkerIcon';
import Types from '../types';

const MapMarker = (props) => {
  const {
    title,
    state,
    type,
    coordinates,
  } = props.data;

  const position = [coordinates.lat, coordinates.lng];

  return (
    <Marker
      position={position}
      icon={MapMarkerIcon.getIcon(type)}
    >
      <Popup>
        <span>
          {title}
          {state}
        </span>
      </Popup>
    </Marker>
  );
};

MapMarker.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.shape(Types.car.isRequired).isRequired,
    PropTypes.shape(Types.taxi.isRequired).isRequired,
  ]).isRequired,
};

export default MapMarker;
