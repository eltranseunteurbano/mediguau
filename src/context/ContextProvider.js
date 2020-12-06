import React, { createContext, useReducer } from 'react';
import { rootReducer, states } from './RootReducer';

const context = createContext();

const ContextProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(rootReducer, states);

  return (
    <context.Provider value={{ state, dispatch }}>
      {children}
    </context.Provider>
  );
};

export { ContextProvider, context };