import React, { Fragment, useRef } from 'react';
import cookie from '../services/cookie';
import Consent from './consent';
import Hero from './hero';
import { cookieValueToBoolean } from './utils';

const App = () => {
  const isConsent = useRef(cookieValueToBoolean(cookie.read('consent')))

  const listener = (cookie) => {
    if (cookie.key === 'consent') {
      cookieValueToBoolean(cookie.value);
    }
  };

  return (
    <Fragment>
      <Hero isConsent={isConsent.current} />
      <Consent isConsent={isConsent.current} cookieListener={listener} />
    </Fragment>
  );
}

export default App;
