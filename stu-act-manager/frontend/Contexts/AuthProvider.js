import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const values = {
    loading,
    setLoading,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
