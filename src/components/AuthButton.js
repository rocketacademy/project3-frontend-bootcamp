import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../css/Button.css";

export const AuthButton = ({ login }) => {
  const { loginWithRedirect, logout } = useAuth0();
  console.log(login);

  return (
    <button className="button" onClick={login ? logout : loginWithRedirect}>
      {login ? "Sign Out" : "Sign In/Up!"}
    </button>
  );
};
