import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const AuthButton = ({ login }) => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  console.log(login);
  return login === false ? (
    <button onClick={() => loginWithRedirect()}>Sign In</button>
  ) : (
    <button onClick={() => logout()}>Sign Out</button>
  );
};
