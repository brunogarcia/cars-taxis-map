import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Types from '../types';

const Car = (props) => {
  const { name, address, fuel } = props.data;

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="headline" component="h2">
            {address}
          </Typography>
          <Typography color="textSecondary">
            Fuel: {fuel}
          </Typography>
          <Typography color="textSecondary">
            Plate: {name}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

Car.propTypes = {
  data: Types.car.isRequired,
};

export default Car;
