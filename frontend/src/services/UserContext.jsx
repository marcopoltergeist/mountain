/* eslint-disable react/prop-types */
import { createContext, useMemo, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [reader, setReader] = useState({
    id: localStorage.getItem("id"),
    email: localStorage.getItem("email"),
    username: localStorage.getItem("username"),
  });

  useEffect(() => {
    localStorage.setItem("id", reader.id);
    localStorage.setItem("email", reader.email);
    localStorage.setItem("username", reader.username);
  }, [reader]);

  const props = useMemo(() => ({ reader, setReader }), [reader]);

  return <UserContext.Provider value={props}>{children}</UserContext.Provider>;
}

export default UserContext;
