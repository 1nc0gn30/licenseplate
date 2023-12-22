import React from 'react';

const ErrorComponent = ({ errorMessage }) => {
  return (
    <div>
      <p>Error: {errorMessage}</p>
    </div>
  );
};

export default ErrorComponent;
