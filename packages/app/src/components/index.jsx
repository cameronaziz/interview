import React, { Fragment, useEffect, useState } from 'react';
import cookie from '../services/cookie';
import Consent from './consent';
import Hero from './hero';

const App = () => {
  const [isConsent, setIsConsent] = useState(null);

  useEffect(
    () => {
      const consent = cookie.read('consent');
      cookieSwitch(consent);
    },
    [],
  );

  const cookieSwitch = (value) => {
    switch (value) {
      case 'true': {
        setIsConsent(true);
        break;
      }
      case 'false': {
        setIsConsent(false);
        break
      }
      default: {
        setIsConsent(null);
      };
    }
  };

  const listener = (cookie) => {
    if (cookie.key === 'consent') {
      cookieSwitch(cookie.value);
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
