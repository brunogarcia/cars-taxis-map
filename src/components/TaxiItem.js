import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Types from '../utils/types';
import './TaxiItem.css';
import TaxiState from './TaxiState';

const TaxiItem = (props) => {
  const { id, state, coordinate } = props.data;

  return (
    <Fragment>
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
    </Fragment>
  );
};

TaxiItem.propTypes = {
  data: Types.taxi.isRequired,
};

export default TaxiItem;
