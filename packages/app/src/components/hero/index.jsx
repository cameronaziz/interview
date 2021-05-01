import React, { useEffect, useState } from 'react';
import { errorBoundary } from '../../errorBoundary';
import cookie from '../../services/cookie';
import experiments from '../../services/experiments';
import { EXPERIMENT_ID } from '../../settings';
import TKWW from '../svg/tkww';
import Badge from './badge';
import './styled.css';

const Hero = () => {
  const [experiment, setExperiment] = useState(null);

  useEffect(
    () => {
      getExperiment();
    },
    [],
  );

  const getExperiment = async () => {
    const consent = cookie.read('consent');
    if (consent === 'true') {
      const data = await experiments.getAssignment(EXPERIMENT_ID);
      setExperiment(data);
    }
  };

  return (
    <div className="hero-container">
      <div className="hero">
        <Badge experiment={experiment} />
        <TKWW />
      </div>
    </div>
  );
};

export default errorBoundary(Hero);
