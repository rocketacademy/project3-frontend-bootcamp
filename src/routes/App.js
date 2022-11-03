import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import HeaderBar from "../components/Header";
import PermanentDrawerLeft from "../components/Drawer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
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
        backgroundAttachment: "fixed",
      }}
    >
      <Box sx={{ width: "20%" }}>
        <PermanentDrawerLeft />
      </Box>
      <HeaderBar />
      <Outlet />
    </Container>
  );
};

export default App;
