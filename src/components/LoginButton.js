import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const loginAndRedirect = async () => {
    await loginWithRedirect();
  };

  return <button onClick={loginAndRedirect}>Log In</button>;
};

export default LoginButton;
