import { EXPERIMENTS_API } from '../settings';

const getAssignment = async (experimentId) => {
  // validate if exp id is valid
  const response = await fetch(`${EXPERIMENTS_API}/${experimentId}`);
  return response.json();
};

const experiments = {
  getAssignment,
};

export default experiments;
