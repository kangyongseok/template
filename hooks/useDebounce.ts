import { useEffect } from "react";

import useTimeout from "./useTimeout";

type Callback = () => void;

export default function useDebounce(callback: Callback, delay: number, dependencies: any[]) {
  const { reset, clear } = useTimeout(callback, delay);

  useEffect(() => {
    reset();
  }, [...dependencies, reset]);

  useEffect(() => {
    return () => { 
      clear();
    };
  }, []);
}
