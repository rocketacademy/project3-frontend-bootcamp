import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { BACKEND_URL } from "../constant";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

export const UserContext = createContext("test");

export function UserProvider({ children }) {
  const [dbUser, setDbUser] = useState(null);
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();

  const loginButton = (
    <Button onClick={() => loginWithRedirect()}>Log In</Button>
  );

  const retrieveProfile = async () => {
    await axios
      .post(`${BACKEND_URL}/profile`, {
        userEmail: user.email,
      })
      .then((res) => {
        const { data } = res;
        setDbUser(data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // to make sure user data from db is called once
    if (isAuthenticated) retrieveProfile();
  }, [isAuthenticated]);

  return (
    <UserContext.Provider value={{ dbUser, loginButton }}>
      {children}
    </UserContext.Provider>
  );
}

export const UserAuth = () => {
  // to make sure that UserContext can be used in components
  return useContext(UserContext);
};
