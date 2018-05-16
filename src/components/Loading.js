import React from 'react';
import './Loading.css';

const Loading = () => {
  const message = 'Loading...';

  return (
    <div className="Loading-main">
      <p>{message}</p>
    </div>
  );
};

export default Loading;
