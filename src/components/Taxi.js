import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Types from '../types';

const Taxi = (props) => {
  const { id, state, coordinate } = props.data;

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="headline" component="h2">
            {id}
          </Typography>
          <Typography color="textSecondary">
            State: {state}
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

Taxi.propTypes = {
  data: Types.taxi.isRequired,
};

export default Taxi;
