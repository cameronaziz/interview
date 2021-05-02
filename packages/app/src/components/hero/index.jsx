import { errorBoundary, TKWW } from '@tkmp-interview/util';
import React, { useEffect, useState } from 'react';
import experiments from '../../api/experiments';
import cookie from '../../services/cookie';
import { EXPERIMENT_ID } from '../../settings';
import Badge from './badge';
import './styled.css';

const Hero = (props) => {
  const { isConsent } = props
  const [experimentAssignment, setExperimentAssignment] = useState(null);

  useEffect(
    () => {
      if (isConsent) {
        const assignment = cookie.read('assignment');
        if (assignment) {
          setExperimentAssignment(JSON.parse(assignment));
          return;
        }
        getExperiment();
      }
    },
    [isConsent],
  );

  const getExperiment = async () => {
    if (isConsent) {
      const data = await experiments.getAssignment(EXPERIMENT_ID);
      cookie.write('assignment', JSON.stringify(data.assignment));
      setExperimentAssignment(data);
    }
  };

  return (
    <div className="hero-container">
      <div className="hero">
        <Badge assignment={experimentAssignment} />
        <TKWW />
      </div>
    </div>
  );
};

export default errorBoundary(Hero);
