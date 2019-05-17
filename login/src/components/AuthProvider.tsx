import React, { createContext, useState, useEffect } from 'react';
import { authApp } from '../base';

export const AuthContext = createContext({ currentUser: null });

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    authApp.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
