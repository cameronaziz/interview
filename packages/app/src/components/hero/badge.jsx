import React from 'react';
import { errorBoundary } from '../../errorBoundary';

const Badge = (props) => {
  if (props.experiment === null || props.experiment.assignment.name !== 'test') {
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
