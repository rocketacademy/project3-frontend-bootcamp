import React from "react";
import { Avatar } from "@mui/material";
import { AuthButton } from "./AuthButton";
import AppLogo from "../components/applogo.png";
import { AppBar } from "@mui/material";
import "../css/App.css";

export function NavBar({ login }) {
  return (
    <AppBar>
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
    </AppBar>
  );
}
