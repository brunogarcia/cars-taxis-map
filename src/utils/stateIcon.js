import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import OffIcon from '@material-ui/icons/HighlightOff';

const ACTIVE = 'ACTIVE';

const isActive = state => state === ACTIVE;

const getIcon = (state) => {
  if (isActive(state)) {
    return <CheckIcon color="primary" />;
  }

  return <OffIcon color="error" />;
};

export default { getIcon };
