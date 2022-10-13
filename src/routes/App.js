import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import HeaderBar from "../components/Header";
import PermanentDrawerLeft from "../components/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <PermanentDrawerLeft />
        <Box component="div" sx={{ position: "relative", top: "20%" }}>
          <Outlet />
        </Box>
      </div>
    );
  }
}

export default App;
