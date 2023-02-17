import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const AuthButton = (login) => {
  const { loginWithRedirect, logout } = useAuth0();
  if (login === false) {
    return <button onClick={() => loginWithRedirect()}>Sign In</button>;
  } else {
    return <button onClick={() => logout()}>Log Out</button>;
  }
};
