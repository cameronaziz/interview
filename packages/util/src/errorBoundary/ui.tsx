import React, { ErrorInfo, FunctionComponent, MouseEvent, useState } from 'react';
import Details from './details';

interface ErrorUIProps {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

const ErrorUI: FunctionComponent<ErrorUIProps> = (props) => {
  const { error, errorInfo } = props;
  const [isDetailsShown, setIsDetailsShown] = useState(false);

  const showDetails = () => {
    setIsDetailsShown(true);
  };

  const closeDetails = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsDetailsShown(false);
  };

  return (
    <div className="error-container" onClick={showDetails}>
      <div className="error">Error</div>
      <div className="error-details">
        Click to see details
      </div>
      {isDetailsShown &&
        <Details error={error} closeDetails={closeDetails} errorInfo={errorInfo} />
      }
    </div>
  );
};

export default ErrorUI;
