import { useCallback } from 'react';
import useIsMounted from './useIsMounted';

export default function useSafeAsyncAction() {
  const isMounted = useIsMounted();

  const runSafeASyncAction = useCallback((callback) => {
    if (isMounted()) {
      callback();
    }
  }, [isMounted]);

  return runSafeASyncAction;
}
