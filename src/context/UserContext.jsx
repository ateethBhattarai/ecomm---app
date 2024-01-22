import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { userData } from "../utils/userData";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  //   login randomized user
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * userData.length);
    setUser(userData[randomIndex]);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

export default UserContextProvider;
