import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../css/Button.css";

export const AuthButton = ({ logIn }) => {
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <button className="button" onClick={logIn ? logout : loginWithRedirect}>
      {logIn ? "Sign Out" : "Sign In / Up!"}
    </button>
  );
};
