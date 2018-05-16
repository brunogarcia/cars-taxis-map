import React from 'react';
import PropTypes from 'prop-types';
import Taxi from './Taxi';
import Types from '../types';

const Taxis = props => props.data.map(taxi => <Taxi key={taxi.id} data={taxi} />);

Taxis.propTypes = {
  data: PropTypes.arrayOf(Types.taxi.isRequired).isRequired,
};

export default Taxis;
