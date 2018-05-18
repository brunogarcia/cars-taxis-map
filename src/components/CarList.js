import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import CarItem from './CarItem';
import Types from '../utils/types';

const CarList = props => (
  <div style={{ padding: 20 }}>
    <Grid container spacing={24}>
      {props.data.map(item => <CarItem key={item.id} data={item} />)}
    </Grid>
  </div>
);

CarList.propTypes = {
  data: PropTypes.arrayOf(Types.car.isRequired).isRequired,
};

export default CarList;
