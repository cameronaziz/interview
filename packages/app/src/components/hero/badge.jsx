import { errorBoundary } from '@tkmp-interview/util';
import React from 'react';

const Badge = (props) => {
  if (props.assignment === null || props.assignment.name !== 'test') {
    return null;
  }

  return (
    <div className="badge-container">
      <div className="badge">
        New and improved
      </div>
    </div>
  );
};

export default errorBoundary(Badge);
