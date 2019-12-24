import React, { createContext, useContext } from "react";

export const PreloadedStateContext = createContext({});

export const PreloadedStateProvider = props => {
  const preloadedState = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;
  return <PreloadedStateContext.Provider value={preloadedState} {...props} />;
};

export const usePreloadedState = () => useContext(PreloadedStateContext);

export const withPreloadedState = Component => props => {
  const preloadedState = usePreloadedState();
  return <Component preloadedState={preloadedState} {...props} />;
};
