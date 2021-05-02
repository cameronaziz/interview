export const cookieValueToBoolean = (value) => {
  switch (value) {
    case 'true': {
      return true
    }
    case 'false': {
      return false
    }
    default: {
      return null
    };
  }
};