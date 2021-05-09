import { useEffect, useRef, useState } from 'react';

export const useThrottleFn = (fn, ms = 200, args) => {
  const [state, setState] = useState(null);
  const timeout = useRef(null);
  const nextArgs = useRef(null);

  useEffect(() => {
    if (!timeout.current) {
      setState(fn(...args));
      const timeoutCallback = () => {
        if (nextArgs.current) {
          setState(fn(...nextArgs.current));
          nextArgs.current = null;
          timeout.current = setTimeout(timeoutCallback, ms);
        } else {
          timeout.current = null;
        }
      };
      timeout.current = setTimeout(timeoutCallback, ms);
    } else {
      nextArgs.current = args;
    }
  }, args);

  return state;
};
