/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from "react";
import usersMock from "@/mocks/usersMock.json";

export interface AuthInterface {
  data: UserInterface;
  isAuth: boolean;
}

export interface AuthContextInterface {
  authValues: AuthInterface;
  setAuthValues: (value: UserInterface) => { res: any; err: any };
  getAuthValues: () => void;
}

const defaultValue: AuthContextInterface = {
  authValues: {
    isAuth: false,
    data: {} as UserInterface,
  },
  setAuthValues: () => ({ res: null, err: null }),
  getAuthValues: () => {},
};

export const AuthContext = createContext<AuthContextInterface>(defaultValue);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuth, setIsAuth] = useState(true);
  const [authValues, _setAuthValues] = useState<AuthInterface>({
    isAuth,
    data: usersMock[0],
  } as unknown as AuthInterface);

  const setAuthValues = (value: UserInterface) => {
    return { res: null, err: null };
  };

  const getAuthValues = () => {};

  return (
    <AuthContext.Provider value={{ authValues, setAuthValues, getAuthValues }}>
      {children}
    </AuthContext.Provider>
  );
};
