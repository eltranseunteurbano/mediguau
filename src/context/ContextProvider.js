import React, { createContext, useReducer } from 'react';
import { rootReducer, states } from './RootReducer';
import LoadScreen from '../container/LoadScreen';

const context = createContext();

const ContextProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(rootReducer, states);

  return (
    <context.Provider value={{ state, dispatch }}>
      <LoadScreen>{children}</LoadScreen>
    </context.Provider>
  );
};

export { ContextProvider, context };