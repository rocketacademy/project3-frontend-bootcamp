import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import HeaderBar from "../components/Header";
import PermanentDrawerLeft from "../components/Drawer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
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
    <Container className="App" maxWidth="false">
      <HeaderBar />
      <PermanentDrawerLeft />
      <Box sx={{ position: "relative", left: "20%", top: "20%" }}>
        <Outlet />
      </Box>
      {/* {loadMainPage} */}
    </Container>
  );
};

export default App;
