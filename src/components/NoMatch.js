import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AlertIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';

const NoMatch = ({ location }) => (
  <Fragment>
    <Typography variant="headline" component="h3">
      <AlertIcon /> Error
    </Typography>
    <Typography componentnt="p">
      No match for <em>{location.pathname}</em>
    </Typography>
  </Fragment>
);

NoMatch.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default NoMatch;
