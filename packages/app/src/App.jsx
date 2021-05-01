import React, { Fragment, useEffect, useState } from 'react';
import Consent from './components/consent';
import Hero from './components/hero';
import cookie from './services/cookie';

const App = () => {
  const [isConsent, setIsConsent] = useState(null);


  useEffect(
    () => {
      const consent = cookie.read('consent');
      cookieSwitch(consent)
    },
    [],
  );

  const cookieSwitch = (value) => {
    switch (cookie.value) {
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
