import React from "react";
import { Avatar } from "@mui/material";
import { AuthButton } from "./AuthButton";
import "../css/Navbar.css";
import AppLogo from "../components/applogo.png";
import { useAuth0 } from "@auth0/auth0-react";

export function NavBar({ login }) {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  return (
    <>
      <nav className="nav">
        <img className="logo" alt="logo" src={AppLogo}></img>
        {login ? (
          <div>
            <input className="search-bar" placeholder="Search for people" />
            <Avatar />

            <AuthButton login={isAuthenticated} />
          </div>
        ) : (
          <>
            <AuthButton login={isAuthenticated} />
          </>
        )}
      </nav>
    </>
  );
}
