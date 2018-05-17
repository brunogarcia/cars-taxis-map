import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Battery from './Battery';
import Types from '../utils/types';
import './CardItem.css';

const CarItem = (props) => {
  const {
    name,
    address,
    fuel,
    coordinates,
  } = props.data;

  return (
    <div>
      <Card className="CardItem-main">
        <CardContent>
          <Typography variant="headline" component="h2">
            {address}
          </Typography>
          <div className="CardItem-fuel">
            <Battery energy={fuel} />
          </div>
          <Typography color="textSecondary">
            Plate: {name}
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
