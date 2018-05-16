import React from 'react';
import PropTypes from 'prop-types';
import Car from './Car';
import Types from '../types';

const Cars = props => props.data.map(car => <Car key={car.id} data={car} />);

Cars.propTypes = {
  data: PropTypes.arrayOf(Types.car.isRequired).isRequired,
};

export default Cars;
