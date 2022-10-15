import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import HeaderBar from "../components/Header";
import PermanentDrawerLeft from "../components/Drawer";
import Box from "@mui/material/Box";
import ReservationsOverview from "../components/ReservationsOverview";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <PermanentDrawerLeft />
        <Box component="div" sx={{ position: "relative", top: "20%" }}>
          <Outlet />
          <ReservationsOverview />
        </Box>
      </div>
    );
  }
}

export default App;
