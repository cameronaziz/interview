export const splitLocation = (stack: string[]) =>
  stack.map(
    (stackCall) =>
      stackCall
        .split('(')
        .map(
          (callItem) =>
            callItem.endsWith(')') ?
              callItem.substring(0, callItem.length - 1) :
              callItem
        )
  );