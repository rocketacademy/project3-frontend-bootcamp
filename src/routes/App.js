import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import HeaderBar from "../components/Header";
import PermanentDrawerLeft from "../components/Drawer";
import Box from "@mui/material/Box";
import ReservationsOverview from "../components/ReservationsOverview";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogOutButton";
import { Loading } from "./Loading";

const App = () => {
  const { isAuthenticated, user, loginWithRedirect, isLoading, error } =
    useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  // const main = (
  //   <div className="App">
  //     <HeaderBar />
  //     <PermanentDrawerLeft />
  //     <Box component="div" sx={{ position: "relative", top: "20%" }}>
  //       <LogoutButton />
  //       <Outlet />
  //     </Box>
  //   </div>
  // );

  // const loadMainPage = <div>{isAuthenticated ? main : <LoginButton />}</div>;

  return (
    <div className="App">
      <div className="App">
        <HeaderBar />
        <PermanentDrawerLeft />
        <Box component="div" sx={{ position: "relative", top: "20%" }}>
          <LogoutButton />
          <Outlet />
          <ReservationsOverview />
        </Box>
      </div>
      {/* {loadMainPage} */}
    </div>
  );
};

export default App;
