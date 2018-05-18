import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TaxiItem from './TaxiItem';
import Types from '../utils/types';

const TaxiList = props => (
  <div style={{ padding: 20 }}>
    <Grid container spacing={24}>
      {props.data.map(item => <TaxiItem key={item.id} data={item} />)}
    </Grid>
  </div>
);

TaxiList.propTypes = {
  data: PropTypes.arrayOf(Types.taxi.isRequired).isRequired,
};

export default TaxiList;
