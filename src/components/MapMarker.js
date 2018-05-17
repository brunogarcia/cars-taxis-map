import React from 'react';
import PropTypes from 'prop-types';
import Leaflet from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import TaxiIcon from '../taxi.png';
import CarIcon from '../car.png';
import Types from '../types';
import CONSTANTS from '../constants';

const { TAXI } = CONSTANTS.TYPES;

const taxiIcon = Leaflet.icon({
  iconUrl: TaxiIcon,
});

const carIcon = Leaflet.icon({
  iconUrl: CarIcon,
});

const getIcon = (type) => {
  if (type === TAXI) {
    return taxiIcon;
  }

  return carIcon;
};

const MapMarker = (props) => {
  const {
    title,
    state,
    type,
    coordinates,
  } = props.data;

  const position = [coordinates.lat, coordinates.lng];

  return (
    <Marker icon={getIcon(type)} position={position}>
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
