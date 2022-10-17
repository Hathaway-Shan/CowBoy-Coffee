import { useContext, createContext, useState } from 'react';
import { getUser } from '../services/auth';

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(getUser());

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
} 

export function useUser() {
  return useContext(UserContext);
}