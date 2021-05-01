const read = (key) => {
  const cookies = document.cookie.split(';').map((c) => {
    const raw = c.trim().split('=');
    return {
      key: raw[0],
      value: raw[1],
    }
  });
  const cookie = cookies.find((c) => c.key === key);

  if (cookie) {
    return cookie.value;
  }

  return null;
}

const set = (key, value, listener) => {
  const date = new Date();
  date.setSeconds(date.getSeconds() + 15);

  const expires = date.toUTCString();
  const cookie = `${key}=${value}; expires=${expires};`;

  document.cookie = cookie;

  if (listener) {
    listener({
      key,
      value,
    });
  }
};

const cookie = {
  set,
  read,
};

export default cookie;
