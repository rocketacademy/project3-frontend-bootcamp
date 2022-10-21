import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import HeaderBar from "../components/Header";
import PermanentDrawerLeft from "../components/Drawer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading } from "./Loading";

const App = () => {
  const { isAuthenticated, user, loginWithRedirect, isLoading, error } =
    useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container
      className="App"
      maxWidth="false"
      sx={{
        display: "flex",
        alignContent: "center",
      }}
    >
      <HeaderBar />
      <Box sx={{ width: "20%" }}>
        <PermanentDrawerLeft />
      </Box>
      <Box sx={{ pt: "10%", width: "80%" }}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default App;
