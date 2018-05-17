import React from 'react';
import PropTypes from 'prop-types';
import CarItem from './CarItem';
import Types from '../utils/types';

const CarList = props => props.data.map(item => <CarItem key={item.id} data={item} />);

CarList.propTypes = {
  data: PropTypes.arrayOf(Types.car.isRequired).isRequired,
};

export default CarList;
