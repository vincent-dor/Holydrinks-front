import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null
  );

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const AppStates = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return (
    <AppContext.Provider value={AppStates}>{children}</AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

export default AppProvider;
