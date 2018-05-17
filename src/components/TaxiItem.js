import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import OffIcon from '@material-ui/icons/HighlightOff';
import Types from '../types';
import './TaxiItem.css';

const ACTIVE = 'ACTIVE';

const isActive = state => state === ACTIVE;

const getStateIcon = (state) => {
  if (isActive(state)) {
    return <CheckIcon color="primary" />;
  }

  return <OffIcon color="error" />;
};

const TaxiItem = (props) => {
  const { id, state, coordinate } = props.data;

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="headline" component="h2">
            {id}
          </Typography>
          <Typography color="textSecondary">
            State: {getStateIcon(state)}
          </Typography>
          <Typography color="textSecondary">
            Latitude: {coordinate.latitude} <br />
            Longitude: {coordinate.longitude}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

TaxiItem.propTypes = {
  data: Types.taxi.isRequired,
};

export default TaxiItem;
