import React, { Fragment } from 'react';
import AlertIcon from '@material-ui/icons/Announcement';
import Typography from '@material-ui/core/Typography';

const Error = () => {
  const message = 'Looks like there was a problem';

  return (
    <Fragment>
      <Typography variant="headline" component="h3">
        <AlertIcon /> Error
      </Typography>
      <Typography componentnt="p">
        <em>{message}</em>
      </Typography>
    </Fragment>
  );
};

export default Error;
