import React, { useContext, useState } from "react";

export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
// USE THIS TO STORE STATES.
export function AuthProvider({ children }) {
  //set user data that you are going to pass down to different componenet.
  const [cadetInfo, setCadetInfo] = useState([]);
  const [slInfo, setSlInfo] = useState([]);
  const [currentUserEmail, setCurrentUserEmail] = useState([]);

  // function required to setState in other components
  const updateCadetInfo = (data) => {
    setCadetInfo(data);
  };

  const updateSlInfo = (data) => {
    setSlInfo(data);
  };

  const updateCadetEmail = (data) => {
    setCurrentUserEmail(data);
  };
  // States and Functions that are passed down and USE by ALL components.
  const value = {
    updateCadetInfo,
    updateSlInfo,
    updateCadetEmail,
    cadetInfo,
    slInfo,
    currentUserEmail,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
