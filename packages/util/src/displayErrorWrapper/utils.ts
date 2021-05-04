export const splitLocation = (stack: string[]) =>
  stack
    .map(
      (stackCall) =>
        stackCall
          .split('(')
          .map(
            (callItem) => {
              const base = callItem.endsWith(')') ?
                callItem.substring(0, callItem.length - 1) :
                callItem
              return base.replace('webpack-internal:///', '')
            }
          )
    )
    .filter(
      (stackCall) =>
        stackCall.length === 1 || !stackCall[1].includes('errorBoundary'),
    );


export const showLink = (stackCall: string[]): boolean => stackCall.length > 1 && showVSCodeLink(stackCall[1]) && !!dirName()
export const dirName = () => process.env.DIRNAME || process.env.REACT_APP_DIRNAME || null;
const showVSCodeLink = (path: string) => !path.includes('node_modules') && !path.includes('http://') && !path.includes('https://');

export const join = (...segments: string[]) => {

  let parts: string[] = [];
  for (var i = 0, l = segments.length; i < l; i++) {
    parts = parts.concat(segments[i].split('/'));
  }

  const newParts = [];

  for (i = 0, l = parts.length; i < l; i++) {
    const part = parts[i];
    if (!part || part === '.') {
      continue;
    }

    if (part === '..') {
      newParts.pop();
      continue;
    }

    newParts.push(part);
  }

  if (parts[0] === '') {
    newParts.unshift('');
  }

  return newParts.join('/') || (newParts.length ? '/' : '.');
}