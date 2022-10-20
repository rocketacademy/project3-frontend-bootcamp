import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import HeaderBar from "../components/Header";
import PermanentDrawerLeft from "../components/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
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
    <div className="App">
      <div className="App">
        <HeaderBar />
        <PermanentDrawerLeft />
        <Box component="div" sx={{ position: "relative", top: "20%" }}>
          <Outlet />
        </Box>
      </div>
    </div>
  );
};

export default App;
