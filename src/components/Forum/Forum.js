import { Outlet } from "react-router-dom";
import ForumNavBar from "./ForumNavBar";
import ForumErrorPopUp from "./ForumErrorPopUp";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
export default function Forum() {
  const [errorMessage, setErrorMessage] = useState("");
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <ForumNavBar />
      <Outlet />
      <ForumErrorPopUp
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
    </div>
  );
}
