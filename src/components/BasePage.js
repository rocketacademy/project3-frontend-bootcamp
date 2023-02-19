import React, { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router";

export function BasePage() {
  const [logIn, setLogIn] = useState(true);
  const [avatar, setAvatar] = useState(process.env.REACT_APP_AVATAR);
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    isAuthenticated ? setLogIn(true) : setLogIn(false);
  }, [isAuthenticated]);

  return (
    <>
      <NavBar login={logIn} />
      <Outlet />
    </>
  );
}
