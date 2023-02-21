import React from "react";
import { Avatar } from "@mui/material";
import { AuthButton } from "./AuthButton";
import "../css/Navbar.css";
import AppLogo from "../components/applogo.png";

export function NavBar({ login }) {
  return (
    <>
      <nav className="nav">
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
      </nav>
    </>
  );
}
