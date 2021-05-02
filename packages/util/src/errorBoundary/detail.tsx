import React, { FunctionComponent } from 'react';
import { splitLocation } from './utils';

interface DetailProps {
  stack: string[];
  name: string;
}

const Detail: FunctionComponent<DetailProps> = (props) => {
  const { name, stack } = props;

  return (
    <div className="error-details-stack">
      <div className="error-details-stack-title">
        {name} Stack
      </div>
      <div className="error-details-stack-content">
        {splitLocation(stack).map((stackCall, index) =>
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
  );
};

export default Detail;
