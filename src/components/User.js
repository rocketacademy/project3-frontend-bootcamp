import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export function User() {
  const [accessToken, setAccessToken] = useState("");
  const { isAuthenticated, getAccessTokenSilently, loginWithRedirect } =
    useAuth0();

  const checkUser = async () => {
    if (isAuthenticated) {
      let token = getAccessTokenSilently();
      setAccessToken(token);
    } else {
      loginWithRedirect();
    }
  };
  useEffect(() => {
    checkUser();
  }, []);
  return <></>;
}
