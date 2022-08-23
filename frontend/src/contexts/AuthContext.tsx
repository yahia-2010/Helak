/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from "react";

export interface AuthContextInterface {
  authValues: AuthInterface;
  setAuthValues: (value: AuthUserInterface) => { res: any; err: any };
  getAuthValues: () => void;
}

const defaultValue: AuthContextInterface = {
  authValues: {
    isAuth: false,
    data: {
      name: { fName: null, lName: null },
      age: null,
      gender: null,
      language: null,
      password: null,
      country: null,
      eduLevel: null,
      email: null,
      phone: null,
    },
  },
  setAuthValues: () => ({ res: null, err: null }),
  getAuthValues: () => {},
};

export const AuthContext = createContext<AuthContextInterface>(defaultValue);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuth, setIsAuth] = useState(false);
  const [authValues, _setAuthValues] = useState<AuthInterface>({
    isAuth,
  } as AuthInterface);

  const setAuthValues = (value: AuthUserInterface) => {
    return { res: null, err: null };
  };

  const getAuthValues = () => {};

  return (
    <AuthContext.Provider value={{ authValues, setAuthValues, getAuthValues }}>
      {children}
    </AuthContext.Provider>
  );
};
