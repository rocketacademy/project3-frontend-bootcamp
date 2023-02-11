import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "@mui/icons-material";

export function HomePage() {
  const [logIn, setLogIn] = useState(true); //default will be false, use a useEffect to change later on.
  const [avatar, setAvatar] = useState(process.env.REACT_APP_AVATAR);

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#ADD8E6",
        }}
      >
        {logIn && <SearchIcon />}
        {logIn && <Avatar />}
        {!logIn && (
          <Link to="/auth" component="button">
            Sign In/Sign Up
          </Link>
        )}
      </nav>
      <img
        src="https://previews.123rf.com/images/virinka/virinka1901/virinka190100053/114916618-vector-banner-with-the-group-of-happy-people.jpg"
        style={{
          display: "flex",
          width: "99%",
          height: "30%",
          padding: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <section className="about">
        <h1>What we aim to do:</h1>
        <ul>
          <li>Review your current / past colleagues</li>
          <li>Blah blah blah</li>
        </ul>
      </section>
    </>
  );
}
