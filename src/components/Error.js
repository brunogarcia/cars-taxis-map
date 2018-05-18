import React from 'react';
import AlertIcon from '@material-ui/icons/Announcement';
import './Error.css';

const Error = () => {
  const message = 'Looks like there was a problem';

  return (
    <div className="Error-main">
      <p>{message} <AlertIcon /></p>
    </div>
  );
};

export default Error;
