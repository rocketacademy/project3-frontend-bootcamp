import React from "react";
import { Avatar } from "@mui/material";
import { AuthButton } from "./AuthButton";
import AppLogo from "../components/applogo.png";
import { AppBar, Toolbar } from "@mui/material";
import "../css/App.css";

export function NavBar({ login }) {
  return (
    <AppBar sx={{ bgcolor: "common.white" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img className="logo" alt="logo" src={AppLogo}></img>
        {login ? (
          <div>
            <input className="search-bar" placeholder="Search for people" />
            <Avatar />
            <AuthButton login={login} />
          </div>
        ) : (
          <>
            <AuthButton login={login} />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
