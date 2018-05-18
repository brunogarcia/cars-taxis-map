import React, { Fragment } from 'react';
import Proptypes from 'prop-types';
import CheckIcon from '@material-ui/icons/Check';
import OffIcon from '@material-ui/icons/HighlightOff';
import CONSTANTS from '../constants';

const { ACTIVE } = CONSTANTS.STATE;

const isActive = state => state === ACTIVE;

const getLiteral = (state) => {
  if (isActive(state)) {
    return 'available';
  }

  return 'not available';
};

const getIcon = (state) => {
  if (isActive(state)) {
    return <CheckIcon color="primary" />;
  }

  return <OffIcon color="error" />;
};

const TaxiState = (props) => {
  const { state } = props;

  return (
    <Fragment>
      {`This taxi is ${getLiteral(state)}`}
      {getIcon(state)}
    </Fragment>
  );
};

TaxiState.propTypes = {
  state: Proptypes.string.isRequired,
};

export default TaxiState;
