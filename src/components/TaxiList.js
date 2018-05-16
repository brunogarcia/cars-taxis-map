import React from 'react';
import PropTypes from 'prop-types';
import TaxiItem from './TaxiItem';
import Types from '../types';

const TaxiList = props => props.data.map(item => <TaxiItem key={item.id} data={item} />);

TaxiList.propTypes = {
  data: PropTypes.arrayOf(Types.taxi.isRequired).isRequired,
};

export default TaxiList;
