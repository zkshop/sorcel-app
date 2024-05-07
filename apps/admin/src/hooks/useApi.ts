import { useEffect } from 'react';
import { Base } from '../api/base';
import { useState } from 'react';

export const useApi = <T>(callback: () => T): [boolean, T | undefined] => {
  const [ready, setReady] = useState(false);
  const [apiClass, setApiClass] = useState<T | undefined>(undefined);

  useEffect(() => {
    if (Base.token) {
      setApiClass(callback());
      setReady(true);
    }
  }, [Base.token]);

  return [ready, apiClass];
};
