import { useContext, createContext, useState } from "react";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState('');
} 