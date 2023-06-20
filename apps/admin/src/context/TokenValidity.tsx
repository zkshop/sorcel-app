import type { ReactNode } from 'react';
import React, { createContext, useState, useContext } from 'react';

interface TokenValidityContextProps {
  isValid: boolean;
  setValidity: (value: boolean) => void;
}

const TokenValidityContext = createContext<TokenValidityContextProps>({
  isValid: false,
  setValidity: () => null,
});

interface TokenValidityProviderProps {
  children: ReactNode;
}

export const TokenValidityProvider = ({ children }: TokenValidityProviderProps) => {
  const [isValid, setIsValid] = useState<boolean>(false);

  const setValidity = (value: boolean) => {
    setIsValid(value);
    setTimeout(() => setIsValid(false), 5 * 60 * 1000);
  };

  return (
    <TokenValidityContext.Provider value={{ isValid, setValidity }}>
      {children}
    </TokenValidityContext.Provider>
  );
};

export const useTokenValidity = (): TokenValidityContextProps => useContext(TokenValidityContext);
