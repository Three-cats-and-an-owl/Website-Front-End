import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logIn = (userData) => {
    setUser(userData);
  };

  const logOut = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};