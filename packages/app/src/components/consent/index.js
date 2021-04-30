import React, { useEffect, useState } from 'react';
import cookie from '../../services/cookie';
import Button from './button';
import './styles.css';

const Consent = () => {
  const [isShown, setIsShown] = useState(false);

  useEffect(
    () => {
      const isConsent = cookie.read('consent');
      if (!isConsent) {
        setIsShown(true);
      }
    },
    [],
  );

  const handleClick = (value) => {
    cookie.set('consent', value);
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

export default Consent;
