const UNIQUE_KEY = 'tkmp-cookie-storage_';

const keyToUnique = (key) => `${UNIQUE_KEY}${key}`;

const read = (key) => {
  const cookies = document.cookie.split(';').map((c) => {
    const raw = c.trim().split('=');
    return {
      key: raw[0],
      value: raw[1],
    }
  });
  const cookie = cookies.find((c) => c.key === keyToUnique(key));

  if (cookie) {
    return cookie.value;
  }

  return null;
}

const write = (key, value, listener) => {
  const oneYear = 60*60*24*365;
  const cookie = `${keyToUnique(key)}=${value}; max-age=${oneYear}`;

  document.cookie = cookie;

  if (listener) {
    listener({
      key,
      value,
    });
  }
};

const cookie = {
  read,
  write,
};

export default cookie;
