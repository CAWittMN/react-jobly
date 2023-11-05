import { useState, createContext } from "react";
import JoblyApi from "../api";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(JoblyApi.token);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, setCurrentUser, token, setToken }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
