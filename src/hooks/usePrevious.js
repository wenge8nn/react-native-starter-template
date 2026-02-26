import {useRef, useEffect} from 'react';

// https://usehooks.com/usePrevious/
export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
