import React, { useState } from 'react';
import { ICurrentUser } from 'models';

type ContextState = {
  user: ICurrentUser | null;
  setUser: (user: ICurrentUser | null) => void;
}

export const UserContext = React.createContext<ContextState | null>(null);

interface UserProviderProps {
  user: ICurrentUser | null;
  children: React.ReactNode;
}

export function UserProvider({ user: defaultUser, children }: UserProviderProps) {
  const [user, setUser] = useState(defaultUser);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      { children }
    </UserContext.Provider>
  );
};
