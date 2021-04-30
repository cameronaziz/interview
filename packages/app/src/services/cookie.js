const read = (key) => {
  const cookies = document.cookie.split(';').map((c) => {
    const raw = c.trim().split('=');
    return {
      key: raw[0],
      value: raw[1],
    }
  });
  return cookies.find((c) => c.key === key);
}

const set = (key, value) => {
  const date = new Date()
  date.setSeconds(date.getSeconds() + 15)
  const expires = date.toUTCString();
  const cookie = `${key}=${value}; expires=${expires};`;
  document.cookie = cookie;
};

const cookie = {
  set,
  read,
};

export default cookie;
