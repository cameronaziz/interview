import React from 'react';
import { errorBoundary } from '../../errorBoundary';

const Button = (props) => {
  const { buttonType, onClick } = props;
  const buttonTypeClass = buttonType === 'confirm' ? 'consent-confirm-button' : 'consent-reject-button';

  const handleClick = () => {
    onClick(buttonType === 'confirm');
  };

  return (
    <button
      onClick={handlClick}
      className={`consent-button ${buttonTypeClass}`}
    >
      {buttonType === 'confirm' ? 'Allow' : 'Deny'}
    </button>
  );
};

export default errorBoundary(Button);
