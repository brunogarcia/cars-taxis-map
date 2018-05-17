import React from 'react';
import PropTypes from 'prop-types';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const NoMatch = ({ location }) => {
  const message = `No match for ${location.pathname}`;
  return <SnackbarContent message={message} />;
};

NoMatch.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default NoMatch;
