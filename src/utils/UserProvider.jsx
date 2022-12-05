import { createContext, useContext, useState } from 'react';

const Context = createContext(null);

const useInitialContext = () => {
  const [user, setUser] = useState(null);

  return {
    setUser,
    user
  };
};

export const useCurrentUser = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('Cannot be use without being initialized');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const context = useInitialContext();
  return <Context.Provider value={context}>{children}</Context.Provider>;
};
