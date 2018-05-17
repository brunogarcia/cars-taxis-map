import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import Typography from '@material-ui/core/Typography';
import markerIcon from '../utils/markerIcon';
import Types from '../utils/types';
import Battery from './Battery';
import stateIcon from '../utils/stateIcon';

const getBattery = (fuel) => {
  if (fuel) {
    return (
      <Typography color="textSecondary">
        <Battery energy={fuel} />
      </Typography>
    );
  }

  return null;
};

const getState = (state) => {
  if (state) {
    return (
      <Typography color="textSecondary">
        I am {stateIcon.getIcon(state)}
      </Typography>
    );
  }

  return null;
};

const MapMarker = (props) => {
  const {
    address,
    state,
    fuel,
    plate,
    type,
    coordinates,
  } = props.data;

  const position = [coordinates.lat, coordinates.lng];

  return (
    <Marker
      position={position}
      icon={markerIcon.getIcon(type)}
    >
      <Popup>
        <span>
          <Typography variant="title">
            {plate}
          </Typography>
          <Typography variant="subheading">
            {address}
          </Typography>
          {getBattery(fuel)}
          {getState(state)}
        </span>
      </Popup>
    </Marker>
  );
};

MapMarker.propTypes = {
  data: Types.marker.isRequired,
};

export default MapMarker;
