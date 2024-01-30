import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { usersData } from "../utils/usersData";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  /*
        DEV NOTE:
        To randomly select a user as the logged-in user.
        Note: Comment the useEffect below to have no user selected as the logged-in user.
    */

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * usersData.length);
    setUser(usersData[randomIndex]);
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
