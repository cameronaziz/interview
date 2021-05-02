import React, { ErrorInfo, FunctionComponent, MouseEvent, useRef } from 'react';
import { splitLocation } from './utils';

interface DetailsProps {
  error: Error | null;
  errorInfo: ErrorInfo | null;
  closeDetails(event: MouseEvent<HTMLDivElement>): void;
}


const Details: FunctionComponent<DetailsProps> = (props) => {
  const { error, errorInfo, closeDetails } = props
  const overlayRef = useRef(null);
  const callStack = error?.stack ? error.stack.split('\n') : [];
  callStack.shift();
  const componentStack = errorInfo?.componentStack.split('\n') || [];

  const clickOverlay = (event: MouseEvent<HTMLDivElement>) => {
    if (overlayRef.current && event.target === overlayRef.current) {
      closeDetails(event);
    }
  }

  return (
    <div ref={overlayRef} className="error-details-overlay" onClick={clickOverlay}>
      <div className="error-details-container">
        <div className="error-details-close" onClick={closeDetails}>
          <div>
            X
          </div>
        </div>
        <div className="error-details-title">
          {error?.message || 'An Error Ocurred'}
        </div>
        <div className="error-details-content">
          <div className="error-details-stack">
            <div className="error-details-stack-title">
              Component Stack
            </div>
            <div className="error-details-stack-content">
              {splitLocation(componentStack).map((stackCall, index) =>
                <div key={`${stackCall}-${index}`}>
                  {stackCall.map((item, index) =>
                    <div
                      key={`${item}-${index}`}
                      className={`${index === 0 ? '' : 'error-details-stack-indent'}`}
                    >
                      {item}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          {callStack &&
            <div className="error-details-stack">
              <div className="error-details-stack-title">
                Call Stack
              </div>
              <div className="error-details-stack-content">
                {splitLocation(callStack).map((stackCall, index) =>
                  <div key={`${stackCall}-${index}`}>
                    {stackCall.map((item, index) =>
                      <div
                        key={`${item}-${index}`}
                        className={`${index === 0 ? '' : 'error-details-stack-indent'}`}
                      >
                        {item}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          }
        </div>
      </div>
    </div >
  );
};

export default Details;
