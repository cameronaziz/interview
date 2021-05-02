import React, { Fragment, useEffect, useState } from 'react';
import cookie from '../services/cookie';
import Consent from './consent';
import Hero from './hero';
import { cookieValueToBoolean } from './utils';

const App = () => {
  const [isConsent, setIsConsent] = useState(null);

  useEffect(
    () => {
      const consent = cookie.read('consent');
      const result = cookieValueToBoolean(consent);
      setIsConsent(result);
    },
    [],
  );

  const listener = (cookie) => {
    if (cookie.key === 'consent') {
      const result = cookieValueToBoolean(cookie.value);
      setIsConsent(result);
    }
  };

  return (
    <Fragment>
      <Hero />
      <Consent isConsent={isConsent} cookieListener={listener} />
    </Fragment>
  );
}

export default App;
