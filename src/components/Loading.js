import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import './Loading.css';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const Loading = () => {
  const message = 'Loading...';

  return (
    <div className="Loading-main">
      <CircularProgress size={50} />
      <p>{message}</p>
    </div>
  );
};

export default withStyles(styles)(Loading);
