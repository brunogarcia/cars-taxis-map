import React, { Fragment } from 'react';
import { Popup } from 'react-leaflet';
import Typography from '@material-ui/core/Typography';
import Types from '../utils/types';
import Battery from './Battery';
import TaxiState from './TaxiState';

const getBattery = (fuel) => {
  if (fuel) {
    return (
      <Typography color="textSecondary">
        Car battery charge at <Battery energy={fuel} />
      </Typography>
    );
  }

  return null;
};

const getState = (state) => {
  if (state) {
    return (
      <Typography color="textSecondary">
        <TaxiState state={state} />
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
    <Popup closeButton={false}>
      <Fragment>
        <Typography variant="title">
          {plate}
        </Typography>
        <Typography variant="subheading">
          {address}
        </Typography>
        {getBattery(fuel)}
        {getState(state)}
      </Fragment>
    </Popup>
  );
};

MapMarkerPopup.propTypes = {
  data: Types.marker.isRequired,
};

export default MapMarkerPopup;
