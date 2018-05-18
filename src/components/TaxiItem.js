import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Types from '../utils/types';
import TaxiState from './TaxiState';

const TaxiItem = (props) => {
  const { id, state, coordinate } = props.data;

  return (
    <Grid item xs={12} md={6} lg={4} xl={3}>
      <Card>
        <CardContent>
          <Typography variant="title" component="h2">
            {id}
          </Typography>

          <Typography color="textSecondary">
            <TaxiState state={state} />
          </Typography>
          
          <Typography color="textSecondary">
            Latitude: {coordinate.latitude} <br />
            Longitude: {coordinate.longitude}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

TaxiItem.propTypes = {
  data: Types.taxi.isRequired,
};

export default TaxiItem;
