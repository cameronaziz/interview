import { errorBoundary } from '@tkmp-interview/util';
import React from 'react';

const Button = (props) => {
  const { buttonType, onClick } = props;
  const buttonTypeClass = buttonType === 'confirm' ? 'consent-confirm-button' : 'consent-reject-button';

  const handleClick = () => {
    onClick(buttonType === 'confirm');
  };

  const label = buttonType === 'confirm' ? 'Allow' : 'Deny';

  return (
    <button
      onClick={handleClick}
      className={`consent-button ${buttonTypeClass}`}
    >
      {label}
    </button>
  );
};

export default errorBoundary(Button);
