import { useRef, useEffect } from 'react';

/**
 * Custom hook that ensures a callback is executed only once even in strict-mode.
 * @param callback The callback function to be executed.
 */
export const useOnce = (callback: () => void) => {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    callback();
    hasRun.current = true;
    // The empty dependency array ensures this effect is only invoked once on mount.
  }, [callback]); // Including callback in the dependency array to adhere to exhaustive-deps rule, but it's expected that callback does not change.
};
