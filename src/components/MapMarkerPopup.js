import React from 'react';
import { Popup } from 'react-leaflet';
import Typography from '@material-ui/core/Typography';
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

const MapMarkerPopup = (props) => {
  const {
    address,
    state,
    fuel,
    plate,
  } = props.data;

  return (
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
  );
};

MapMarkerPopup.propTypes = {
  data: Types.marker.isRequired,
};

export default MapMarkerPopup;
