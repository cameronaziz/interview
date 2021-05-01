import React, { useState } from 'react';
import { errorBoundary } from '../../errorBoundary';
import cookie from '../../services/cookie';
import Button from './button';
import './styles.css';

const Consent = (props) => {
  const { isConsent, cookieListener } = props;
  const hasConsent = isConsent || false;
  const [isShown, setIsShown] = useState(!hasConsent);

  const handleClick = (value) => {
    cookie.set('consent', value, cookieListener);
    setIsShown(false);
  };

  return (
    <div className={`consent-container ${isShown ? '' : 'consent-container-hidden'}`}>
      <div className="consent-message">
        Do you want to allow cookies?
      </div>
      <div className="consent-button-container">
        <Button buttonType="confirm" onClick={handleClick} />
        <Button buttonType="reject" onClick={handleClick} />
      </div>
    </div>
  );
};

export default errorBoundary(Consent);
