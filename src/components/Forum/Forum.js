import { Outlet } from "react-router-dom";
import ForumNavBar from "./ForumNavBar";
import ForumErrorPopUp from "./ForumErrorPopUp";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
export default function Forum() {
  const [errorMessage, setErrorMessage] = useState("");
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  return isLoading || !isAuthenticated ? (
    <span className="loading loading-dots loading-lg"></span>
  ) : (
    <div className="flex flex-col items-center">
      <ForumNavBar />
      <Outlet context={[errorMessage, setErrorMessage]} />
      <ForumErrorPopUp
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
    </div>
  );
}
