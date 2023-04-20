import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../constant";

export default function Home() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const loginButton = (
    <Button onClick={() => loginWithRedirect()}>Log In</Button>
  );

  const logoutButton = (
    <Button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </Button>
  );

  console.log(isAuthenticated);
  return (
    <div>
      <div>Welcome to MyEduCloud</div>
      <div>{isAuthenticated ? logoutButton : loginButton}</div>
      <Link to="/profile">My Profile</Link>
    </div>
  );
}
