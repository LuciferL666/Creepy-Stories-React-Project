import { useState, useEffect } from "react";

export default function usePersistedState(key, defaultValue) {
  const [state, setState] = useState(() => {
    const persistedState = localStorage.getItem(key);

    if (persistedState) {
      return JSON.parse(persistedState);
    }

    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  const updateState = (value) => {
    setState(value);
  };

  return [state, updateState];
}
