import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Types from '../types';

const CarItem = (props) => {
  const {
    name,
    address,
    fuel,
    coordinates,
  } = props.data;

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="headline" component="h2">
            {address}
          </Typography>
          <Typography color="textSecondary">
            Plate: {name} / Fuel: {fuel}
          </Typography>
          <Typography color="textSecondary">
            Latitude: {coordinates[0]} <br />
            Longitude: {coordinates[1]}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

CarItem.propTypes = {
  data: Types.car.isRequired,
};

export default CarItem;
