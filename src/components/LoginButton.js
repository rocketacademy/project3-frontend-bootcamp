import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  const loginAndRedirect = async () => {
    if (isAuthenticated && user.logins_count === 0) {
      axios.post("http://localhost:3000/users/", {
        firstName: "Charles",
        lastName: "Lee",
        userEmail: user.email,
        username: user.nickname,
      });
      // If the user is already logged in and has not logged in before, redirect to onboarding page - change route later"
      navigate("/");
    } else if (isAuthenticated && user.logins_count > 0) {
      // If the user is already logged in, redirect to the home page
      navigate("/");
    }

    await loginWithRedirect();
  };

  return <button onClick={loginAndRedirect}>Log In</button>;
};

export default LoginButton;
