import React, { useEffect, useState } from 'react';
import experiments from '../../services/experiments';
import TKWW from '../svg/tkww';
import Badge from './badge';
import './styled.css';

const Hero = () => {
  const [isInExperiment, setIsInExperiment] = useState(false);

  useEffect(
    () => {
      getExperiment()
    },
    [],
  );

  const getExperiment = async () => {
    const data = await experiments.getAssignment('b3326ffc-6bf6-4670-a4d0-797a8bb491c3')
    if (!data) {
      return;
    }
    if (data.assignment.name === 'test') {
      setIsInExperiment(true);
    }
  };

  return (
    <div className="hero-container">
      <div className="hero">
        {isInExperiment &&
          <Badge />
        }
        <TKWW />
      </div>
    </div>
  );
};

export default Hero;
