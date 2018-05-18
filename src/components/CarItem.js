import React from 'react';
import Grid from '@material-ui/core/Grid';
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
    <Grid item xs={12} md={6} lg={4} xl={3}>
      <Card className="CardItem-main">
        <CardContent>
          <Typography variant="subheading">
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
    </Grid>
  );
};

CarItem.propTypes = {
  data: Types.car.isRequired,
};

export default CarItem;
